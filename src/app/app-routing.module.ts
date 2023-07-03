import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from 'src/pages/catalogo/catalogo.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MeusLivrosComponent } from 'src/pages/meus-livros/meus-livros.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: "MyBookPlanner"},
  {path: 'catalogo', component: CatalogoComponent, title: "MyBookPlanner - Catálogo"},
  {path: 'meusLivros', component: MeusLivrosComponent,  title: "MyBookPlanner - Meus Livros"},
  {path: 'login', component: LoginComponent,  title: "MyBookPlanner - Login"},
  {path: 'perfil', component: PerfilComponent,  title: "MyBookPlanner - Perfil"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
