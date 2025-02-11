import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { BlogModule } from './pages/blog/blog.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';

const routes: Routes = [
  { path: 'home', component: HomeModule }, // Route pour la page d'Accueil
  { path: 'portfolio', component: PortfolioModule }, // Route pour le Aortfolio
  { path: 'blog', component: BlogModule }, // Route pour le blog
  { path: 'about', component: AboutModule }, // Route pour la page About
  { path: 'contact', component: ContactModule } // Route pour la page Contact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
