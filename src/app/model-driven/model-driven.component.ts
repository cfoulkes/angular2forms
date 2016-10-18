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
            title: ['', Validators.required],
            address: this.formBuilder.group({
                addr1: ['', Validators.required],
                city: ['', Validators.required]
            })
        });

        this.subscribeToFormChanges();
    }

    subscribeToFormChanges() {
        const formValueChanges$ = this.clientForm.valueChanges;

        formValueChanges$.subscribe(console.log);
    }

    onSubmit() {
        console.log('onSubmit');
        this.submitted = true;
    }

    newClient() {
        this.client = { id: 100, firstName: '', lastName: '', initials: '', titleId: 1 };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    titleForId(id): String {
        var titleStr = '';
        this.titles.forEach(function (title) {
            if (title.id === id) {
                titleStr = title.desc;
            }
        });
        return titleStr;
    }

}
