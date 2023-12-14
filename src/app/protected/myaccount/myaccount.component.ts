import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { IUser } from '../../models/IUser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyAccountComponent implements OnInit {
  
  user = {} as IUser;
  changePass: boolean = false;
  public updateForm: FormGroup;
  public updatePassForm: FormGroup;
  private currentUser: any;

  constructor(private userService: CrudService, private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.auth.getLoggedInUser();
    this.fetchUserData();

    this.updateForm = this.fb.group({
      newEmail: ['', [Validators.required, Validators.email]],
      newPhone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      newUsername: ['', Validators.required],
      newFirstName: ['', Validators.required],
      newLastName: ['', Validators.required],
      newStreetAdd: ['', Validators.required],
      newStreetAdd2: ['', Validators.required],
      newCity: ['', Validators.required],
      newState: ['', Validators.required],
      newZipCode: ['', Validators.required]
    });

    this.updatePassForm = this.fb.group({
      currentPass: ['', Validators.required],
      newPass: ['', Validators.required],
      comfirmPass: ['', Validators.required]
    }, { validator: this.passwordConfirming });
  }

  showChange() {
    this.changePass = !this.changePass;
  }

  passwordConfirming(c: FormGroup): { [key: string]: boolean } | null {

    let newPasswordControl = c.get('newPass');
    let confirmPassControl = c.get('comfirmPass');

    if (newPasswordControl && confirmPassControl) {
      if (newPasswordControl.value !== confirmPassControl.value || newPasswordControl.value === "" || confirmPassControl.value === "") {
        return { 'passwordMismatch': true };
      }
    }
    
    return null;
  }

  fetchUserData() {

    this.userService.GetUser(this.currentUser.id_number).subscribe((userData) => {
      console.log(userData);
      this.user = userData;
    });

  }

  updateUserData() {

    const updatedData = this.updateForm.value;
    const phoneNum = updatedData.newPhone.split('');
    updatedData.newPhone = phoneNum[0] + phoneNum[1] + phoneNum[2] + "-" + phoneNum[3] + phoneNum[4] + phoneNum[5] + "-" + phoneNum[6] + phoneNum[7] + phoneNum[8] + phoneNum[9];

    this.userService.UpdateUser(this.currentUser.id_number, updatedData).pipe(
      catchError(error => {
        if (error) {
          // Handle 404 error here
          alert("Unkown Error Occured!");
        }
        return throwError(error);
      })
    ).subscribe(() => {
      this.fetchUserData();
      this.updateForm.reset();
      alert("User data updated!");
    });

  }

  updatePassword() {
    console.log(this.updatePassForm.value);
    this.userService.UpdateUser(this.currentUser.id_number, this.updatePassForm.value).pipe(
      catchError(error => {
        if (error) {
          // Handle 404 error here
          alert("Current Password is incorrect!");
        }
        return throwError(error);
      })
    ).subscribe(() => {
      this.fetchUserData();
      this.updatePassForm.reset();
      alert("Password updated!");
    });

  }

}
