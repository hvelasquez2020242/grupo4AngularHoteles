import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public usuarioModelGet: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this.usuarioModelGet = new Usuario('','','','','')
  }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.usuarioModelGet =     this._usuarioService.getIdentidad()
    console.log(this.usuarioModelGet);

  }

}
