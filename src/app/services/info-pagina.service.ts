import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  infong: any[] = [];
  equipo: any[] = [];
  cargada = false;

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargaEquipo();
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: infoPagina) => {
        this.cargada = true;
        this.info = (resp);
      });
  }

  private cargaEquipo() {
    this.http.get('https://jajtabay2024-f55b8-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {
        this.equipo = resp;
        // console.log(resp);
      });
  }
}
