import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-comentario',
  templateUrl: './add-comentario.component.html',
  styleUrls: ['./add-comentario.component.css']
})
export class AddComentarioComponent implements OnInit {
  usuario:any
  comentario:string="";
  form
  constructor(private formBuilder:FormBuilder) { 
    this.form= this.formBuilder.group({
      comentario : ['', []],
      usuario : ['', []],
     })
  }

  ngOnInit(): void {
  }
  addDatos(){
    console.log()
  }
}
