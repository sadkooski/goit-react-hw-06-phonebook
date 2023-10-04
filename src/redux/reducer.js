import { combineReducers } from 'redux';
import { initialState } from './store';

const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
