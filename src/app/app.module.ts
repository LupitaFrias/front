import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AddAptitudComponent } from './componentes/add-aptitud/add-aptitud.component'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path:'add-aptitud', component: AddAptitudComponent},
  {path:'aptitudes', component: AptitudesComponent},
  {path:'acerca', component:AcercaComponent},
  {path:'comentarios', component:ComentariosComponent},
  {path:'educacion', component:EducacionComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'footer', component:FooterComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'info', component:InfoComponent},
  
  {path:'encabezado', component: EncabezadoComponent},
]

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
    ExperienciaComponent,
    AddAptitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot (appRoutes, {enableTracing:true}),
    AppRoutingModule
   
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
