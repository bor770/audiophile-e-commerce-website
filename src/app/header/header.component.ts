import { CdkMenuModule } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

@Component({
  imports: [CdkMenuModule, NgClass, NgIf, LetDirective, BurgerMenuComponent],
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
export class HeaderComponent extends BaseComponent {
  position: ConnectedPosition[] = [
    {
      offsetY: 38,
      originX: `start`,
      originY: `bottom`,
      overlayX: `start`,
      overlayY: `top`,
    },
  ];
}
