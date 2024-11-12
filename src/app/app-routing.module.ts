
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo:'login',
        pathMatch: 'prefix'
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
    },
  {
    path: '', component: NavbarComponent,
    canActivate:[AuthGuard],
    children: [
      {path: 'home',component: HomeComponent},
      {path: 'cadastrar-usuario', component: CadastrarUsuarioComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
