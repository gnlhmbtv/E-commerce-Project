import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map, catchError } from 'rxjs/operators';

@Component({
	selector: 'pages-contact-two',
	templateUrl: './contact-two.component.html',
	styleUrls: ['./contact-two.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactTwoPageComponent implements OnInit {
	apiLoaded: Observable<boolean>;
  
	constructor(httpClient: HttpClient) {
		this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw', 'callback')
		.pipe(
			map(() => true),
			catchError(() => of(false)),
		);
	}
	
	ngOnInit(): void {
	}
}