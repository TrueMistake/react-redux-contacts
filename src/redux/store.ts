import {combineReducers, createStore} from "redux";
import {contactsReducer} from "src/redux/contactsReducer";

export const store = createStore(
  combineReducers({
    contacts: contactsReducer
  })
)