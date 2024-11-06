import { SET_ACCOUNT } from "./types";
import * as accountService from '../../../service/AccountService';

export const setAccount = account => {
  return {
    type: SET_ACCOUNT,
    account
  }
}

export function loadAccount() {
  return function (dispatch, getState) {
    accountService.getAccount().then(response => {
	console.log(response.data);
      dispatch(setAccount(response.data));
    });
  };
}
