import { createAction, props } from '@ngrx/store';

import { Width } from '../layout.model';

export const set = createAction(`[Layout] Set`, props<{ width: Width }>());
