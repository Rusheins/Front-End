import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TitulosDeEducacionComponent } from './components/titulos-de-educacion/titulos-de-educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';
import { FormsModule } from '@angular/forms';
import { EditeducacionComponent } from './components/titulos-de-educacion/editeducacion.component';
import { NeweducacionComponent } from './components/titulos-de-educacion/neweducacion.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditSkillComponent } from './components/skills/editskill.component';
import { NewSkillComponent } from './components/skills/newskill.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ExperienciaComponent,
    TitulosDeEducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    SkillItemComponent,
    HomeComponent,
    LoginComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
