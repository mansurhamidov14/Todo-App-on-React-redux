import { SWITCH_LANGUAGE } from '../actions';
const initialState = 'az';

const language = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: return action.lang;
    default: return state;
  }
}

export default language;
