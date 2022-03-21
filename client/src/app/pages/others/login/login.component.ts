import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'pages-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent implements OnInit {

	constructor() {

	}

	ngOnInit(): void {
	}
}
