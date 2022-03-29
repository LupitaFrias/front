import { Component, OnInit } from '@angular/core';
import { faPaperclip} from '@fortawesome/free-solid-svg-icons';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarioList: any;

   faPaperclip = faPaperclip;
   
  constructor(private datosPorfolio:PorfolioService) {
    
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.comentarioList=data.comentario;
  
})
}

}
