import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data, Comentario, Experience, Educacion, Aptitudes,Persona, Achivements, usuario} from 'src/app/Datos';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
   
   private showAddDatos:boolean = false;
  

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
  
    return this.http.get('./assets/data/data.json');
   }


   borarrDatos():Observable<any>{
    return this.http.delete('./assets/data/data.json');
   }
   addDatos():Observable<any>{
     return this.http.post('./assets/data/data.json', 1);
   }
   modificarDatos():Observable<any>{
     return this.http.get('./assets/data/data.json');
   }
 

toggleAddDatos():void{
  console.log("ClickClick");
  this.showAddDatos = !this.showAddDatos;

}
}
