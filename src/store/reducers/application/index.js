import { SET_ACTIVE_SCREEN } from "../../actions/application/types";

const initialState = {
  activeScreen: 'home',
  screenOptions: {}
}

const application = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SCREEN:
      return Object.assign({}, state, { activeScreen: action.activeScreen, screenOptions: action.options });
    default:
      return state;
  }
}

export default application;
