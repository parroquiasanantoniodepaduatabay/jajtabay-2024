import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jajmerida2024Component } from './pages/jajmerida2024/jajmerida2024.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ComunidadesComponent } from './pages/comunidades/comunidades.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  { path: 'casa', component: Jajmerida2024Component },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'comunidades/:id', component: ComunidadesComponent }, // /:id
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo:'casa' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
