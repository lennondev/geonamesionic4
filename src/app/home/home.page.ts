import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { DetalheComponent } from '../detalhe/detalhe.component';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage {
	firstSearch: boolean;
	buscado: boolean;
	local: string;
	locais: Array<any> = [];
	searching: boolean;

	constructor(
		private loadingController: LoadingController,
		private toastController: ToastController,
		private popoverController: PopoverController,
		private request: RequestService
	) {}

	buscar() {
		this.searching = true;
		this.request
			.makeSearch(this.local)
			.then((data: any) => {
				this.firstSearch = true;
				this.locais = data.geonames;
				this.buscado = true;
				this.searching = false;
			})
			.catch((err: any) => {
				this.searching = false;
			});
	}

	async abrirPopover(event: any, id: number) {
		const loading = await this.loadingController.create({ message: 'Carregando Detalhes...' });
		loading.present();
		this.request
			.getDetails(id)
			.then(async (detalhes: any) => {
				loading.dismiss();
				const popover = await this.popoverController.create({
					componentProps: {
						detalhes
					},
					component: DetalheComponent,
					event,
					showBackdrop: true
				});
				await popover.present();
			})
			.catch(async (err: any) => {
				loading.dismiss();
				const toast = await this.toastController.create({
					message: 'Não foi possível obter os detalhes',
					duration: 3000,
					position: 'bottom'
				});
				toast.present();
			});
	}
}
