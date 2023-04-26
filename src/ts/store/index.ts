import {configureStore} from '@reduxjs/toolkit';
import servicesReducer from '../slices/servicesSlice';
import {createEpicMiddleware, combineEpics, Epic} from 'redux-observable';
import {detailsEpic, servicesEpic} from '../epics';

const epic: Epic = combineEpics(
  servicesEpic,
  detailsEpic
);

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic)

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
