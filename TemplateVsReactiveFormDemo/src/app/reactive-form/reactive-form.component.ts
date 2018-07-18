import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, CustomValidators.forbiddenNames]),
      'email': new FormControl(null, [Validators.required, Validators.email], CustomValidators.forbiddenEmailsAsync),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.get('email').valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    )

    this.signupForm.get('email').statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    )

    // setting default values
    this.signupForm.setValue({
      'username': 'Max',
      'email': 'max@test.com',
      'gender': 'Male',
      'hobbies': []
    });

    // setting only specific value
    this.signupForm.patchValue({
      'email': 'test@test.com'
    })
  }

  onSubmit() {
    // On successful submit outputs the result to console.
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}
