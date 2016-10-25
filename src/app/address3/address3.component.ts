import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModelGroup, NgModel, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'address3',
  templateUrl: './address3.component.html',
  styleUrls: ['./address3.component.css']
})
export class Address3Component implements OnInit {

  @Input('form')
  public form: NgForm;

  @Input('name')
  public name: string;

  @Input('formGroup')
  public formGroup: FormGroup;

  addressFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressFormGroup = this.formBuilder.group({});
    this.addressFormGroup.addControl('street', new FormControl('', Validators.required));
    this.addressFormGroup.addControl('city', new FormControl('', Validators.required));


    if (this.form) {
      this.form.control.addControl(this.name, this.addressFormGroup);
    }
  }

}
