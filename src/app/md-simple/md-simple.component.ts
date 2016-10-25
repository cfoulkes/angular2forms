import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'md-simple',
    templateUrl: './md-simple.component.html',
    styleUrls: ['./md-simple.component.css']
})
export class MdSimpleComponent implements OnInit {

    theForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        console.log('MdSimpleComponent.ngOnInit ');

        // this.theForm = new FormGroup({
        //     firstName: new FormControl('', Validators.required),
        //     lastName: new FormControl('', [Validators.required, Validators.maxLength(5)]),
        //     address: new FormGroup({
        //         street: new FormControl(''),
        //         city: new FormControl('')
        //     })
        // });

        this.theForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', [Validators.required, Validators.maxLength(5)]],
            address: this.formBuilder.group({
                street: [''],
                city: ['']
            }),
            address2: this.formBuilder.group({})
    });

}

onSubmit() {
    //do something with this.theForm
    console.log('onSubmit: ' + JSON.stringify(this.theForm.value));
}

}
