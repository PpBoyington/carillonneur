import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LivreComponent } from './livre/livre.component';
import { AuteurComponent } from './auteur/auteur.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';
import { CarillonnerComponent } from './carillonner/carillonner.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'livre', component: LivreComponent },
  { path: 'auteur', component: AuteurComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'carillonner', component: CarillonnerComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LivreComponent,
    AuteurComponent,
    ProjetComponent,
    ContactComponent,
    CarillonnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
