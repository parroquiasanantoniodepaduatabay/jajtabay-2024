import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { infoPagina } from 'src/app/interface/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  info: infoPagina = {};

  constructor (public infoPaginaService: InfoPaginaService,
                private http: HttpClient ){
    this.cargarInfo();
  }

  
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: infoPagina) => {
          this.info = resp;
        });
      }
}
