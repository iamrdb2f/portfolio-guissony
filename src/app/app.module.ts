import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component'; // Ajout
import { LayoutComponent } from './layout/layout.component';
import {CompetencesComponent} from "./pages/competences/competences.component";
import {ServicesComponent} from "./pages/services/services.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ContactComponent} from "./pages/contact/contact.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    LayoutComponent,
    HomeComponent,
    CompetencesComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
