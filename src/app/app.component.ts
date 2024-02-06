import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryImageMenuComponent } from './shared/category-image-menu/category-image-menu.component';

@Component({
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CategoryImageMenuComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'audiophile-e-commerce-website';
}
