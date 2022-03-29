import { Component, OnInit} from '@angular/core';
import { Aptitudes} from 'src/app/Datos';

import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})


export class AptitudesComponent implements OnInit {
aptitudesList: Aptitudes[]=[];






  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.aptitudesList=data.aptitudes;
     
      
    })
  }
 
 

  onDelete(aptitudes: Aptitudes): void {
    console.log ("borrando datos");
  
    
    this.aptitudesList= this.aptitudesList.filter(h => h!== aptitudes);
    this.datosPorfolio.borarrDatos().subscribe();
   
  }

  
  
 

}