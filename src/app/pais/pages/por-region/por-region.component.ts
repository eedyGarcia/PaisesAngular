import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  paises:Country[] = [];
  regiones:string[]=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  regionActiva:string='';
  constructor(private paisService:PaisService) { }

  activarRegion(region:string){

    if(region===this.regionActiva){return;}

    this.regionActiva = region;
    this.paises=[];
    this.paisService.buscarRegion(region)
    .subscribe(
      (paises)=>{
        this.paises = paises;
      });
  }

}


