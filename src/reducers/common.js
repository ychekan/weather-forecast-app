import { IS_LOADER } from '../constants/actionTypes';

const initialState = () => {
  return {
    isLoader: false,
  };
}

export default function general(state = initialState(), action) {
  switch (action.type) {
    case IS_LOADER:
      return {
        ...state,
        isLoader: !state.isLoader,
      };
    default:
      return state;
  }
}
