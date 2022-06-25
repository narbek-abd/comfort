import { UserState, UserAction, UserActionTypes } from "types/UserReduxTypes";

const user: UserState = {
  data: null,
};

export const UserReduser = (state = user, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { data: action.payload };

    case UserActionTypes.DELETE_USER:
      return { data: null };

    default:
      return state;
  }
};
