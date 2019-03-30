import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
	declarations: [ AppComponent, DetalheComponent ],
	entryComponents: [ DetalheComponent ],
	imports: [ BrowserModule, HttpClientModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule ],
	providers: [ StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
