import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditeducacionComponent } from './components/titulos-de-educacion/editeducacion.component';
import { NeweducacionComponent } from './components/titulos-de-educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
//import { NewSkillComponent } from './components/skills/new-skill.component';
//import { EditSkillComponent } from './components/skills/edit-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  //{path: 'newskill', component: NewSkillComponent},
  //{path: 'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
