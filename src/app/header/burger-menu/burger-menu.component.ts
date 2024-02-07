import { Component } from '@angular/core';

import { CategoryImageMenuComponent } from '../../shared/category-image-menu/category-image-menu.component';

@Component({
  imports: [CategoryImageMenuComponent],
  selector: 'app-burger-menu',
  standalone: true,
  styleUrls: [
    './styles/burger-menu.component.css',
    `./styles/mobile.burger-menu.component.css`,
    `./styles/tablet.burger-menu.component.css`,
  ],
  templateUrl: './burger-menu.component.html',
})
export class BurgerMenuComponent {}
