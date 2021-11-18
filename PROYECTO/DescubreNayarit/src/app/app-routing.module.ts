import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DestinoComponent } from './paginas/destino/destino.component';
import { DestinosComponent } from './paginas/destinos/destinos.component'; 

const routes: Routes= [
{path: 'destinos', component: DestinosComponent},
{path: 'destino/:id', component: DestinoComponent},
{path: '**',pathMatch: 'full', redirectTo:'Destinos'}
                                

];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule 
  ]
})
export class AppRoutingModule { }
