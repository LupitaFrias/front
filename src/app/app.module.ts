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
import { PorfolioService } from './servicios/porfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { BotonComponent } from './componentes/boton/boton.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component'

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
    FooterComponent,
    BotonComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
