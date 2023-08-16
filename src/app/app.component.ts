import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ComunidadesService } from './services/comunidades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public infoPagina: InfoPaginaService,
                public infoComunidades: ComunidadesService ){

  }
}
