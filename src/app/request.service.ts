import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RequestService {
	constructor(private http: HttpClient) {}

	makeSearch(local: string) {
		return this.http.get(`http://api.geonames.org/searchJSON?lang=pt&name=${local}&username=lennon`).toPromise();
	}

	getDetails(id: number) {
		return this.http.get(`http://api.geonames.org/getJSON?lang=pt&geonameId=${id}&username=lennon`).toPromise();
	}
}
