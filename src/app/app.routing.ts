import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { MenuComponent } from './components/menu/menu.component';


const appRoutes: Routes = [
{path: '', component: SobremiComponent},
{path: 'sobre-mi', component: SobremiComponent},
{path: 'galeria', component: GaleriaComponent},
{path: 'menu', component: MenuComponent},
{path: 'contacto', component: ContactoComponent},
{path: '**', component: SobremiComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);