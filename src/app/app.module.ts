import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { PageTitleComponent } from 'src/components/page-title/page-title.component';
import { SubtitleComponent } from 'src/components/subtitle/subtitle.component';
import { ButtonComponent } from 'src/components/button/button.component';
import { ParagraphComponent } from 'src/components/paragraph/paragraph.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginComponent } from '../pages/login/login.component';
import { CatalogoComponent } from '../pages/catalogo/catalogo.component';
import { MeusLivrosComponent } from '../pages/meus-livros/meus-livros.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageTitleComponent,
    SubtitleComponent,
    ButtonComponent,
    ParagraphComponent,
    FooterComponent,
    LoginComponent,
    CatalogoComponent,
    MeusLivrosComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
