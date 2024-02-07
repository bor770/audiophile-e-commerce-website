import { CdkMenuModule } from '@angular/cdk/menu';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../base/base.component';
import { Category, categories } from '../data/categories.data';
import { Width } from '../layout/layout.model';

@Component({
  imports: [CdkMenuModule, NgClass, NgFor, NgStyle, LetDirective],
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
  widths: { [category in Category]: { marginBottom: string; width: string } } =
    {
      earphones: { marginBottom: `-3.81rem`, width: `11.51rem` },
      headphones: { marginBottom: `-5.49rem`, width: `9.2rem` },
      speakers: { marginBottom: `-6.02rem`, width: `9.74rem` },
    };

  mainImgAlt(category: Category) {
    return `${category} image`;
  }

  mainImgSrc(category: Category) {
    return `../../../assets/images/shared/desktop/image-category-thumbnail-${category}.png`;
  }

  shadowImgSrc(width: Width) {
    return `../../../assets/images/menu/${width}-shadow.svg`;
  }
}
