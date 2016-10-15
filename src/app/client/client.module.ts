import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsComponent }   from './clients.component';
import { ClientDetailsComponent }   from './client-details.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ClientsComponent, ClientDetailsComponent],
    declarations: [ClientsComponent, ClientDetailsComponent],
    providers: [],
})
export class ClientModule { }
