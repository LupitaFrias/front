import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

declare var $: any
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent  {
  title:string = '#ARGENTINAPROGRAMA';
  showAddDatos: boolean =false;
  subscription?: Subscription;

  constructor(private datosPorfolio:PorfolioService) {}
   
 
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }
   toggleAddDatos(){
     
     this.datosPorfolio.toggleAddDatos();

   }
}
