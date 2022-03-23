import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InfoComponent } from './componentes/info/info.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import{HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InfoComponent,
    AcercaComponent,
    EducacionComponent,
    AptitudesComponent,
    ComentariosComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
