import { CdkMenuModule } from '@angular/cdk/menu';
import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../base/base.component';
import { Category, categories } from '../data/categories.data';
import { Width } from '../layout/layout.model';

@Component({
  imports: [CdkMenuModule, NgClass, NgFor, LetDirective],
  selector: 'app-category-image-menu',
  standalone: true,
  styleUrls: [
    './styles/category-image-menu.component.css',
    `./styles/mobile.category-image-menu.component.css`,
    `./styles/tablet.category-image-menu.component.css`,
    `./styles/desktop.category-image-menu.component.css`,
  ],
  templateUrl: './category-image-menu.component.html',
})
export class CategoryImageMenuComponent extends BaseComponent {
  categories = categories;

  mainImgAlt(category: Category) {
    return `${category} image`;
  }

  mainImgSrc(category: Category, width: Width) {
    return `../../../assets/images/menu/${width}-${category}.png`;
  }

  shadowImgSrc(width: Width) {
    return `../../../assets/images/menu/${width}-shadow.svg`;
  }
}
