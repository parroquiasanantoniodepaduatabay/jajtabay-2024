import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { comunidadesDescripcion } from 'src/app/interface/comunidades-descripcion.interface';
import { infoPagina } from 'src/app/interface/info-pagina.interface';
import { ComunidadesService } from 'src/app/services/comunidades.service';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  comun!: comunidadesDescripcion;
  info: infoPagina = {};
  id!: string;

  constructor( public infoPaginaService: InfoPaginaService,
                private route: Router,
                private router: ActivatedRoute,
                public comunidadesService: ComunidadesService,
                private http: HttpClient){
                  this.cargarInfo();
                }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: infoPagina) => {
          // this.cargada = true;
          this.info = resp;
        });
      }

  buscarComunidad( termino: string ){

    if ( termino.length < 1 ) {
      return;
    }
    this.route.navigate(['/buscar', termino]);
    // console.log(termino);
  }

  ngOnInit(){
    
    this.router.params
        .subscribe( parametros =>{// console.log(parametros['id']);
          this.comunidadesService.getComunidades(parametros['id'])
              .subscribe( (comun: comunidadesDescripcion) => {
                this.id = parametros['id'];
                this.comun = comun;
                console.log(comun.santo);
              });
        });
  }

}
