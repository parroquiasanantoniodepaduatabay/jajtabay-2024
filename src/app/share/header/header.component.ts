import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { infoPagina } from 'src/app/interface/info-pagina.interface';
import { ComunidadesService } from 'src/app/services/comunidades.service';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  info: infoPagina = {};
  id!: string;

  constructor( public infoPaginaService: InfoPaginaService,
    private route: Router,
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
    }

  ngOnInit(){}

}
