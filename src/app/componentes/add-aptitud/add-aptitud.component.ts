
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Aptitudes } from 'src/app/Datos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-aptitud',
  templateUrl: './add-aptitud.component.html',
  styleUrls: ['./add-aptitud.component.css']
})
export class AddAptitudComponent implements OnInit {
name:string=""
progress:any
  form
  
  aptitudesList: Aptitudes[]=[]
 showAddDatos:boolean = false;
 
 
  constructor( private datosPorfolio:PorfolioService, private formBuilder:FormBuilder) {
   this.form= this.formBuilder.group({
    name : ['', []],
    progress : ['', []],
   })
   }

  ngOnInit(): void {

  }
  onSubmit(){
    if(!this.name){
      alert("Quiere confirmar la informacion?");
      return
    }
    const {name, progress} =this
    const newAptitudes = {name, progress}
    
  }
}
