import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  registerForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
  });
  constructor(private fb: FormBuilder) { }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }

  get firstName(): any { return this.registerForm.get('firstName'); }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {}

}
