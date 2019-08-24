import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  // signUpForm: FormGroup;
  signUpForm = this.fb.group({
    'username': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'gender': ['male'],
    'hobbies': this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  get hobbies() {
    return this.signUpForm.get('hobbies') as FormArray;
  }

  addHobbies() {
    // const control = new FormControl(null, Validators.required);
    // (<FormArray>this.signUpForm.get('hobbies')).push(control);
    this.hobbies.push(this.fb.control(''));
  }
}
