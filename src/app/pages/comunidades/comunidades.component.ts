import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comunidadesDescripcion } from 'src/app/interface/comunidades-descripcion.interface';
import { ComunidadesService } from 'src/app/services/comunidades.service';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidades.component.html',
  styleUrls: ['./comunidades.component.css']
})
export class ComunidadesComponent implements OnInit {

  comun!: comunidadesDescripcion;
  id!: string;

  constructor( private route: ActivatedRoute,
                public comunidadesService: ComunidadesService ){}

  ngOnInit(){
    
    this.route.params
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
