import { CdkMenuModule } from '@angular/cdk/menu';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { CategoryImageMenuComponent } from '../shared/category-image-menu/category-image-menu.component';

@Component({
  imports: [
    CdkMenuModule,
    NgClass,
    NgIf,
    LetDirective,
    CategoryImageMenuComponent,
  ],
  selector: 'app-header',
  standalone: true,
  styleUrls: [
    './styles/header.component.css',
    `./styles/mobile.header.component.css`,
    `./styles/tablet.header.component.css`,
    `./styles/desktop.header.component.css`,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {}
