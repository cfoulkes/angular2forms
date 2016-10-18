import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

    // we will pass in address from App component
    @Input('group')
    public addressGroup: FormGroup;

    constructor() { }

    ngOnInit() {
        console.log(this.addressGroup);
        
    }

}
