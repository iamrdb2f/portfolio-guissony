import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Ajout

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
