import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';

@Component({
  imports: [NgClass, NgIf, LetDirective],
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
