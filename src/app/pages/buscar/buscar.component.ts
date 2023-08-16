import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComunidadesService } from 'src/app/services/comunidades.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  
  constructor( private route: ActivatedRoute,
                public comunidadesService: ComunidadesService ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params
    .subscribe( params => {
    this.comunidadesService.buscarComunidades( params['termino'] );
  })
  }
}
