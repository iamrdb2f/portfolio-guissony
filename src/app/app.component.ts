import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component'; // Import nécessaire

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],  // Importe LayoutComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-guissony';
}
