import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';



import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ContactoComponent,
    GaleriaComponent,
    MenuComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule,
    
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
