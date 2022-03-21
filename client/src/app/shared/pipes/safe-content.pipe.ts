import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
	name: 'safeContent',
	pure: true
})

export class SafeContentPipe implements PipeTransform {

	constructor(protected _sanitizer: DomSanitizer) { }

	transform(value: string, type = 'html'): SafeHtml | SafeScript | SafeStyle | SafeUrl | SafeResourceUrl {
		switch (type) {
			case 'html':
				return this._sanitizer.bypassSecurityTrustHtml(value);
			case 'style':
				return this._sanitizer.bypassSecurityTrustStyle(value);
			case 'script':
				return this._sanitizer.bypassSecurityTrustScript(value);
			case 'url':
				return this._sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl':
				return this._sanitizer.bypassSecurityTrustResourceUrl(value);
			default:
				return this._sanitizer.bypassSecurityTrustHtml(value);
		}
	}
}
