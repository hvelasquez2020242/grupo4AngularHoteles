import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { IndefinidoComponent } from './components/indefinido/indefinido.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'hoteles', component: HotelesComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: IndefinidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
