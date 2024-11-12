import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NbMenuItem, NbSidebarService, NbToastrService } from '@nebular/theme';
import { Usuario } from 'src/app/interface/usuario-interface';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  toggle() {
    this.sidebarService.toggle();
  }

  items: NbMenuItem[] = [

    {
      title: 'Página Inicial',
      icon: 'home-outline',
      link: '/home',
    },
    {
      title: 'Cadastrar Usuários',
      icon: "person-add-outline",
      link: "/cadastrar-usuario",
      hidden: !this.authService.hasPermission(['ROLE_ADMIN', 'ROLE_TI']),
    },
  ];

  items2 = [
    { title: 'Logout', icon: '', link: '/' },
  ];

  ngOnInit() {
    this.loadUser();
  }

  constructor(
    private usuarioService: UsuarioService,
    private toastrService: NbToastrService, private router: Router,
    private authService: AuthserviceService,
    private sidebarService: NbSidebarService

  ) {

  }

  usuario: Usuario = {
    name: '',
    login: '',
    password: '',
    role: '',
  }

  loadUser() {
    this.usuarioService.getUserByEmail().subscribe(
      (user: Usuario) => {
        this.usuario = user; // Armazene os dados do Pessoa na variável local

      },
      (error) => {
        console.error('Erro ao carregar dados do Pessoa:', error);
      }
    );
  }

}