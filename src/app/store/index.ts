import { ActionReducerMap } from '@ngrx/store';

import { CounterState, counterReducer } from './counter';
import { LoggerState, loggerReducer } from './logger';

export interface State {
  counter: CounterState
  logger: LoggerState
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  logger: loggerReducer
}