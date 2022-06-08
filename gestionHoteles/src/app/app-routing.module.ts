import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'hoteles', component: HotelesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
