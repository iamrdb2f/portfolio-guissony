import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component'; // Ajout
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    HomeComponent // Ajout du HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponent
  ],
  providers: []
})
export class AppModule { }
