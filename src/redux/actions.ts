export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACT_ID = 'GET_CONTACT_ID';
export const GET_GROUP_CONTACTS = 'GET_GROUP_CONTACTS';
export const GET_FAVORITE = 'GET_FAVORITE';

export function getContacts() {
  return { type: GET_CONTACTS }
}

export function getGroupContacts() {
  return { type: GET_GROUP_CONTACTS }
}

export function getFavorite() {
  return { type: GET_FAVORITE }
}