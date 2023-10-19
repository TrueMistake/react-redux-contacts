import {DATA_CONTACT, DATA_GROUP_CONTACT} from "src/__data__";
import {GET_CONTACT_ID, GET_CONTACTS, GET_FAVORITE, GET_GROUP_CONTACTS} from "src/redux/actions";
import {ContactDto} from "src/types/dto/ContactDto";
import {FavoriteContactsDto} from "src/types/dto/FavoriteContactsDto";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";

export interface initialStateInterface {
  contacts: ContactDto[] | [];
  contactGroup: GroupContactsDto[] | [];
  favorite: FavoriteContactsDto | [];
}

const initialState:initialStateInterface = {
  contacts: DATA_CONTACT,
  contactGroup: DATA_GROUP_CONTACT,
  favorite: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id
  ]
}

export function contactsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: state.contacts
      };
    case GET_GROUP_CONTACTS:
      return {
        ...state,
        contactGroup: state.contactGroup
      };
    case GET_FAVORITE:
      return {
        ...state,
        favorite: state.favorite
      };
    default:
      return state;
  }
}