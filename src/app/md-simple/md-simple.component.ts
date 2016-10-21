import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'md-simple',
    templateUrl: './md-simple.component.html',
    styleUrls: ['./md-simple.component.css']
})
export class MdSimpleComponent implements OnInit {

    theForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.theForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            address: new FormGroup({
                street: new FormControl(''),
                city: new FormControl('')
            })
        });
    }

    onSubmit() {
        //do something with this.theForm
        console.log('onSubmit: ' + JSON.stringify(this.theForm.value));
    }

}
