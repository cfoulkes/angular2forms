import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'td-simple',
  templateUrl: './td-simple.component.html',
  styleUrls: ['./td-simple.component.css']
})
export class TdSimpleComponent implements OnInit {

  @ViewChild('theForm')
  ngForm: NgForm;

  @ViewChild('fn')
  ngModel: NgModel;

  @ViewChild(NgForm)
  ngForm2: NgForm;

  // firstName: string;
  // address: {
  //   street: string,
  //   city: string
  // };


  constructor() { }

  ngOnInit() {
    console.log(this.ngForm);
    console.log(this.ngForm2);
    console.log(this.ngModel);
  }

}
