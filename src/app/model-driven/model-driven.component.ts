import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Client } from '../client/client'

@Component({
  selector: 'model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

    client = new Client(1, 'Fred', 'Flintstone', 'Q', 1);
    titles = [
        { id: 1, desc: 'Mr.' },
        { id: 2, desc: 'Mrs.' },
        { id: 3, desc: 'Ms.' },
        { id: 4, desc: 'Miss' }
    ];
    submitted = false;
    active = true;

    clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      initials: '',
      title: ['', Validators.required]
    });
  }

}
