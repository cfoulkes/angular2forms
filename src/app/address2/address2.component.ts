import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'address2',
    templateUrl: './address2.component.html',
    styleUrls: ['./address2.component.css']
})
export class Address2Component implements OnInit {

    // @Input('group')
    // public parentGroup: FormGroup;

    @Input('group')
    public parentAddressGroup: FormGroup;

    //addressGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        console.log('Adress2 init');

        // this.addressGroup = this.formBuilder.group({
        //     addr1: ['', Validators.required],
        //     city: ['', Validators.required]
        // });

        //this.parentGroup.addControl('address2', this.addressGroup);

        //or

        this.parentAddressGroup.addControl('addr1', new FormControl('', Validators.required ));
        this.parentAddressGroup.addControl('city', new FormControl('', Validators.required ));

        this.subscribeToFormChanges();
    }

    subscribeToFormChanges() {
        const formValueChanges$ = this.parentAddressGroup.valueChanges;
        formValueChanges$.subscribe(x => console.log('Address2Changes: ' + x));
    }

}
