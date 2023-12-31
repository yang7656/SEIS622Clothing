const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const userRoutes = path.join(__dirname, '../src/assets/data/customer_data.json');
const imagesDirectory = path.join(__dirname, '../src/assets/images/products');

const userPort = 8000;
const imagePort = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ==============================================================
===================== For the shopping pages ====================
===============================================================*/
let imageFiles;

fs.readdir(imagesDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory', err);
    return;
  }
  imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
});

app.get('/images', (req, res) => {
  res.json(imageFiles);
});

/* ==============================================================
===================== For the user services =====================
===============================================================*/

let users;

fs.readFile(userRoutes, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    users = JSON.parse(data);
});

//Many of these are placeholders for the user data service
app.get('/users', (req, res) => {

    if (req.query.id_number) {
        const target = users.find(user => user.id_number == req.query.id_number);
        if (!target) {
            res.status(404);
            return res.json({ error: 'User not found' });
        }
        else {
            return res.json(target);
        }
    }

    res.json(users);
    
});


// check login info
app.post('/login', (req, res) => {

    const target = users.find(user => user.email === req.body.email);
    
    if (!target || target.password != req.body.password)
    {
        res.status(404);
        return res.json({error: "Invalid email or password."})
    }
    else
    {
        const payload = {
            user: target
        };
        const secret = 'SEIS622';

        const accessToken = jwt.sign(payload, secret, { expiresIn: '7d' });
        const refreshToken = {
            userId: target.id_number,
            token: Math.random().toString(36).substring(2),
            refreshCount: 0,
            expiryDate: new Date(Date.now() + 86400000 * 7)
        };

        res.status(200).json({ 
            accessToken: accessToken, 
            refreshToken: refreshToken,
            tokenType: 'Bearer'
        });
    }
});

//add new user
app.post('/register', (req, res) => {
    const user = req.body;
    console.log(user)
    users.push(user);
    return res.status(200).json({ message: 'Register successfully!' });
});

// update user info
app.put('/users', (req, res) => {
    if (req.query.id_number) {
        
        const target = users.findIndex(user => user.id_number == req.query.id_number);

        if (!target) {
            res.status(404);
            return res.json({ error: 'User not found' });
        }
        
        if (req.body.newPass) {
            
            if (req.body.currentPass != users[target].password) {
                res.status(404);
                return res.json({ error: 'Current password is incorrect' });
            }

            users[target].password = req.body.newPass;
            return res.status(200).json(users);
        }
        else {
            const newData = {
                "id_number": users[target].id_number,
                "first_name": req.body.newFirstName,
                "last_name": req.body.newLastName,
                "email": req.body.newEmail,
                "street_add": req.body.newStreetAdd,
                "street_add_2": req.body.newStreetAdd2,
                "city": req.body.newCity,
                "state": req.body.newState,
                "zipcode": req.body.newZipCode,
                "phone": req.body.newPhone,
                "username": req.body.newUsername,
                "password": users[target].password,
            };

            users[target] = newData;
            return res.status(200).json(users);
        }
    }
});


/**





app.post('/register', (req, res) => {
    const user = req.body;
    const index = users.findIndex(user => user.email === user.email);
    if (index !== -1) {
        res.sendStatus(401);
    } else {
        users.push(user);
        res.json(user);
    }
});
*/

// Set listeners for the API services
app.listen(userPort, () => console.log(`User data service is running on port ${userPort}`));
app.listen(imagePort, () => console.log(`Image data service is running on port ${imagePort}`));