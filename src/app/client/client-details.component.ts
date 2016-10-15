import { Component, OnInit } from '@angular/core';
import { Client } from './client'

@Component({
    selector: 'client-details',
    templateUrl: 'client-details.component.html'
})
export class ClientDetailsComponent implements OnInit {

    client = new Client(1, 'Fred', 'Flintstone', 'Q', 1);
    titles = [
        { id: 1, desc: 'Mr.' },
        { id: 2, desc: 'Mrs.' },
        { id: 3, desc: 'Ms.' },
        { id: 4, desc: 'Miss' }
    ];
    submitted = false;
    active = true;

    constructor() { }

    ngOnInit() { }

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
        this.titles.forEach(function(title) {
            if (title.id === id) {
                titleStr = title.desc;
            }
        });
        return titleStr;
    }

}