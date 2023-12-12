import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { IUser } from '../../models/IUser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyAccountComponent implements OnInit {
  user = {} as IUser;
  public updateForm: FormGroup;

  constructor(private userService: CrudService, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      newEmail: ['', [Validators.required, Validators.email]],
      newPassword: ['', Validators.required, Validators.minLength(6)],
      newPhone: ['', Validators.required, Validators.minLength(10)],
      newUsername: ['', Validators.required],
      newFirstName: ['', Validators.required],
      newLastName: ['', Validators.required],
      newStreetAdd: ['', Validators.required],
      newStreetAdd2: ['', Validators.required],
      newCity: ['', Validators.required],
      newState: ['', Validators.required],
      newZipCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    // Call the service to fetch user data
    this.userService.GetUser('placeholder').subscribe((userData) => { // replace placeholder with the actual user id
      this.user = userData;
    });
  }

  updateUserData() {
    // Call the service to update user data
    const updatedData = this.updateForm.value;
    this.userService.UpdateUser('placeholder', updatedData).subscribe(() => { // replace placeholder with the actual user id
      this.fetchUserData();
    });
  }
}
