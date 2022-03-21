import { Directive, ElementRef, OnInit, HostListener, Input, AfterViewInit } from '@angular/core';
import { AnimationPlayer, AnimationBuilder, animate, style } from '@angular/animations';

import { animations } from '../data';

declare var $: any;

@Directive( {
	selector: '[contentAnim]'
} )

export class ContentAnimDirective implements OnInit, AfterViewInit {

	@Input() aniName = 'fadeIn';
	@Input() duration = '.8s';
	@Input() offset = 0;

	first = true;
	player: AnimationPlayer;

	constructor ( private el: ElementRef, private animationBuilder: AnimationBuilder ) { }

	ngOnInit () {
	}

	ngAfterViewInit () {
		this.el.nativeElement.classList.add( 'appear-animate' );
		this.createAnimation();

		setTimeout( () => {
			this.handleAnimation();

			let slider = this.el.nativeElement.closest( 'owl-carousel' );
			let self = this;

			if ( slider ) {
				$( slider ).on( 'translate.owl.carousel', () => {
					if ( self.el.nativeElement.closest( '.owl-item:not(.active)' ) ) {
						self.el.nativeElement.classList.add( 'appear-animate' );
					}
				} );

				$( slider ).on( 'translated.owl.carousel', () => {
					if ( self.el.nativeElement.closest( '.owl-item.active' ) ) {
						if ( self.el.nativeElement.classList.contains( 'appear-animate' ) ) {
							self.el.nativeElement.classList.remove( 'appear-animate' );
							this.player.play();
							this.first = false;
						}
					} else {
						self.el.nativeElement.classList.add( 'appear-animate' );
					}
				} )
			}
		}, 300 );
	}

	@HostListener( 'window: scroll', [ '$event' ] )
	onscroll () {
		this.handleAnimation();
	}

	handleAnimation () {
		let rect = this.el.nativeElement.getBoundingClientRect();

		if ( ( ( window.innerHeight > rect.top && rect.top > 0 ) || ( rect.bottom > 0 && rect.bottom < window.innerHeight ) ) && this.first ) {
			if ( this.el.nativeElement.closest( 'owl-carousel' ) && !this.el.nativeElement.closest( '.owl-item.active' ) ) return;

			this.player.play();
			this.first = false;
		}
	}

	createAnimation () {
		this.player = this.animationBuilder
			.build( [
				style(
					animations[ this.aniName ][ 'from' ]
				),
				animate(
					this.duration,
					style(
						animations[ this.aniName ][ 'to' ]
					)
				)
			] )
			.create( this.el.nativeElement );

		let self = this;

		this.player.onStart( function () {
			self.el.nativeElement.classList.remove( 'appear-animate' );
		} );
	}
}