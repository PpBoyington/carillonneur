import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  angularForm = new FormGroup ({
    name: new FormControl()
  });
  constructor(private fb: FormBuilder) { }

  createForm() {
    this.angularForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
