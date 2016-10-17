import { Component, OnInit } from '@angular/core';

import { Client } from '../client/client';

@Component({
    selector: 'app-client-model-driven',
    templateUrl: './client-model-driven.component.html',
    styleUrls: ['./client-model-driven.component.css']
})
export class ClientModelDrivenComponent implements OnInit {

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

    ngOnInit() {
    }

}
