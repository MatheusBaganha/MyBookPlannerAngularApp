import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from 'src/pages/catalogo/catalogo.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MeusLivrosComponent } from 'src/pages/meus-livros/meus-livros.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'meusLivros', component: MeusLivrosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
