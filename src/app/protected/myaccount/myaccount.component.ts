import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { IUser } from '../../models/IUser';

@Component({
  selector: 'myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyAccountComponent implements OnInit {
  private user = {} as IUser;
  private updateForm: FormGroup;

  constructor(private userService: CrudService, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      newEmail: ['', [Validators.required, Validators.email]],
      newPassword: ['', Validators.required, Validators.minLength(6)],
      newPhone: ['', Validators.required, Validators.minLength(10)],
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
