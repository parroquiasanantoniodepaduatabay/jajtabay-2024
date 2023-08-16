import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comunidades } from '../interface/comunidades.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {

  comunidades: Comunidades[] = [];
  cargando = true;
  comunidadesFiltrado: Comunidades[] = [];

  constructor( private http: HttpClient ) { 

    this.cargarComunidades();
  }

  private cargarComunidades(){
    return new Promise<void>( ( resolve, reject ) => {
      this.http.get('https://jajtabay2024-f55b8-default-rtdb.firebaseio.com/comunidades_id.json')
          .subscribe( ( resp: any ) => {
            // console.log(resp);
            this.comunidades=resp;
            setTimeout(() => {
              this.cargando = false;
            }, 3000);
            resolve();
          });
    });
  }

  getComunidades(id: string){
    return this.http.get(`https://jajtabay2024-f55b8-default-rtdb.firebaseio.com/comunidades/${ id }.json`);
  }

  buscarComunidades( termino: string ) {

    if ( this.comunidades.length === 0 ) {
      // cargar Comunidades
      this.cargarComunidades().then( () => {
        // ejecutar después de tener las Comunidades
        // Aplicar filtro
        this.filtrarComunidades( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarComunidades( termino );
    }


  }

  private filtrarComunidades( termino: string ) {

    // console.log(this.comunidades);
    this.comunidadesFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.comunidades.forEach( comun => {

      const comunidadLower = comun.comunidad.toLocaleLowerCase();
      const santolower = comun.santo.toLocaleLowerCase();

      if ( santolower.indexOf( termino ) >= 0 || comunidadLower.indexOf( termino ) >= 0  ) {
        this.comunidadesFiltrado.push( comun );
      }

    });


  }
}
