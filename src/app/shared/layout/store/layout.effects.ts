import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

import { createEffect } from '@ngrx/effects';

import * as LayoutActions from './layout.actions';

@Injectable()
export class LayoutEffects {
  setMobile = createEffect(() => {
    return this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      filter((result) => result.matches),
      map(() => LayoutActions.set({ width: `mobile` }))
    );
  });

  setTablet = createEffect(() => {
    return this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium])
      .pipe(
        filter((result) => result.matches),
        map(() => LayoutActions.set({ width: `tablet` }))
      );
  });

  setDesktop = createEffect(() => {
    return this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        filter((result) => result.matches),
        map(() => LayoutActions.set({ width: `desktop` }))
      );
  });


  constructor(private breakpointObserver: BreakpointObserver) {}
}
