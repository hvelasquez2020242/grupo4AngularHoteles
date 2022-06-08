import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {

  public usuarioModelPost: Usuario;

  constructor(private _usuarioService: UsuarioService) {
    this.usuarioModelPost = new Usuario(
      '',
      '',
      '',
      '',
      ''
    )
  }

  ngOnInit(): void {
  }

  postUsuario() {
    this._usuarioService.registro(this.usuarioModelPost).subscribe(
      (response) => {

        console.log(response);
        this.usuarioModelPost.email = '',
        this.usuarioModelPost.nombre = '',
        this.usuarioModelPost.password = '' 
        

      }


    )
  }


}
