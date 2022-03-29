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
 
 

  onDelete(){
    console.log ("borrando datos");
   this.datosPorfolio.borarrDatos().subscribe(data =>{
     
    this.aptitudesList=data.aptitudes;
    data.aptitudes= data.aptitudes.filter((name:any) => name.name!== data.aptitudes.name);
   })
  }
  
  addDatos(){
    console.log()
  }

}