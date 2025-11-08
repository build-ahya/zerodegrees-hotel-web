import { Action } from "@reduxjs/toolkit";
import LifeCircle from "@/models/lifecircle";

interface PayloadAction extends Action {
  payload: LifeCircle;
}

const initialState: LifeCircle = {
  loading: false,
  isDarkMode: null,
  deviceColorScheme: null,
  locationPermission: false,
  notificationPermission: false,
  notificationBadge: 0,
};

export default function lifeCircle(
  state = initialState,
  action: PayloadAction
) {
  switch (action.type) {
    case "lifeCircle/setLoading": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case "lifeCircle/setDarkMode": {
      return {
        ...state,
        isDarkMode: action.payload,
      };
    }
    case "lifeCircle/toggleTheme": {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }
    case "lifeCircle/setDeviceTheme": {
      return {
        ...state,
        deviceColorScheme: action.payload,
      };
    }
    case "lifeCircle/setLocationPermission": {
      return {
        ...state,
        locationPermission: action.payload,
      };
    }
    case "lifeCircle/setLocation": {
      return {
        ...state,
        location: action.payload,
      };
    }
    case "lifeCircle/setNotificationPermission": {
      return {
        ...state,
        notificationPermission: action.payload,
      };
    }
    case "lifeCircle/setNotificationBadge": {
      return {
        ...state,
        notificationBadge: action.payload,
      };
    }
    default:
      return state;
  }
}
