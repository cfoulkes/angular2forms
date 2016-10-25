import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'address4',
  templateUrl: './address4.component.html',
  styleUrls: ['./address4.component.css']
})
export class Address4Component implements OnInit {
  
  @Input('formGroup')
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('Address4.ngOnInit ' + this.formGroup);
    this.formGroup.addControl('street', new FormControl('', Validators.required));
    this.formGroup.addControl('city', new FormControl('', Validators.required));
  }

}
