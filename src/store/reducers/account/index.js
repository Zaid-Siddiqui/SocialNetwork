import { SET_ACCOUNT } from "../../actions/account/types";

const initialState = {
    account: {}
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return Object.assign({}, state, { account: action.account });
    default:
      return state;
  }
}

export default account;
