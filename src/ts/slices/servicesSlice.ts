import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRootState } from '../store';

export interface IService {
  id: number;
  name: string;
  price: number;
  content?: string;
}

export interface IState {
  services: IService[];
  details: IService | null;
  clickedID: string;
  loading: boolean;
  error: Error | null;
}

const initialState: IState = {
  services: [],
  details: null,
  clickedID: '',
  loading: false,
  error: null,
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    servicesRequest: (state: IState): IState => {
      return {
        ...state,
        services: [],
        details: null,
        loading: true,
        error: null
      }
    },
    servecesRequestSuccess: (state: IState, action: PayloadAction<{ services: IService[] }>): IState => {
      const { services } = action.payload;
      return {
        ...state,
        services,
        details: null,
        loading: false,
        error: null,
      }
    },
    servicesRequestFailure: (state: IState, action: PayloadAction<{ error: Error }>): IState => {
      const { error } = action.payload;
      return {
        ...state,
        services: [],
        details: null,
        loading: false,
        error,
      }
    },
    servicesDetailsRequest: (state: IState, action: PayloadAction<{ clickedID: string }>): IState => {
      return {
        ...state,
        services: [],
        details: null,
        clickedID: action.payload.clickedID,
        loading: true,
        error: null,
      }
    },
    serviceDetailsRequestSuccess: (state: IState, action: PayloadAction<{ details: IService }>): IState => {
      return {
        ...state,
        services: [],
        details: action.payload.details,
        clickedID: '',
        loading: false,
        error: null
      }
    },

  }
});

export const selectServices = (state: TRootState) => state.services.services;
export const selectDetails = (state: TRootState) => state.services.details;
export const selectClickedId = (state: TRootState) => state.services.clickedID;
export const selectLoading = (state: TRootState) => state.services.loading;
export const selectError = (state: TRootState) => state.services.error

export const {
  servicesRequest,
  servecesRequestSuccess,
  serviceDetailsRequestSuccess,
  servicesDetailsRequest,
  servicesRequestFailure,
} = servicesSlice.actions;

export default servicesSlice.reducer;
