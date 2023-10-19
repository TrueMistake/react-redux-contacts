import React, {memo, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import {useSelector} from "react-redux";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {ContactDto} from "src/types/dto/ContactDto";
import {InterfaceContacts} from "src/types/contacts.interface";

export const ContactListPage = memo(() => {
  const contacts = useSelector((state: InterfaceContacts) => state.contacts);
  const [filterContact, setFilterContact] = useState<ContactDto[] | null>(contacts.contacts);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts.contacts;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({name}) => (
        name.toLowerCase().indexOf(fvName) > -1
      ))
    }

    if (fv.groupId) {
      const groupContacts: GroupContactsDto[] | undefined = Array.isArray(contacts.contactGroup) ? contacts.contactGroup : [contacts.contactGroup];
      const selectedGroup = groupContacts.find(({ id }) => id === fv.groupId);

      if (selectedGroup) {
        findContacts = findContacts.filter(({ id }) => (
          selectedGroup.contactIds.includes(id)
        ));
      } else {
        findContacts = contacts.contacts;
      }
    }

    setFilterContact(findContacts);
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={contacts.contactGroup} initialValues={{}} onSubmit={onSubmit}/>
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filterContact
            ? filterContact.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink/>
              </Col>
            ))
            : null
          }
        </Row>
      </Col>
    </Row>
  );
})
