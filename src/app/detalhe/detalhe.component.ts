import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
	selector: 'app-detalhe',
	templateUrl: './detalhe.component.html',
	styleUrls: [ './detalhe.component.scss' ],
	providers: [ InAppBrowser ]
})
export class DetalheComponent implements OnInit {
	detalhes = { wikipediaURL: '' };

	constructor(private iab: InAppBrowser, private navParams: NavParams) {}

	ngOnInit() {
		this.detalhes = this.navParams.get('detalhes');
		console.log(this.detalhes);
	}

	abrirWikipedia() {
		this.iab.create(`https://${this.detalhes.wikipediaURL}`);
	}
}
