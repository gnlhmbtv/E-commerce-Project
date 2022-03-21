import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})

export class StoreService {
    constructor(store: Store<any>) {
        store.subscribe(items => {
            localStorage.setItem('molla', JSON.stringify(items));
        })
    }
}