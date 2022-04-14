import { UserState, UserAction, UserActionTypes } from "../../types/User";

const user: UserState = {
  data: null,
};

export const UserReduser = (state = user, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, data: action.payload };

    case UserActionTypes.DELETE_USER:
      return { ...state, data: null };

    default:
      return state;
  }
};
