import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component( {
	selector: 'molla-quantity-input',
	templateUrl: './quantity-input.component.html',
	styleUrls: [ './quantity-input.component.scss' ]
} )

export class QuantityInputComponent implements OnInit, OnChanges {

	@Input() value = 1;
	@Input() max = 10000;
	@Input() adClass = "";
	@Output() changeQty: EventEmitter<number>;

	current = 1;

	constructor () {
		this.changeQty = new EventEmitter<number>();
	}

	ngOnChanges (): void {
		this.current = this.value;
	}

	ngOnInit (): void {
	}

	increment () {
		if ( this.max <= 0 || this.current >= this.max )
			return;

		this.current++;
		this.changeQty.emit( this.current );
	}

	decrement () {
		if ( this.current > 1 ) {
			this.current--;
			this.changeQty.emit( this.current );
		}
	}

	changeCurrent ( event: any ) {
		if ( parseInt( event.currentTarget.value ) < this.max && parseInt( event.currentTarget.value ) > 0 ) {
			this.current = parseInt( event.currentTarget.value );
			this.changeQty.emit( this.current );
		} else {
			event.currentTarget.value = this.current;
		}
	}
}