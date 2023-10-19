import React, {memo, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import {useSelector} from "react-redux";
import {InterfaceContacts} from "src/types/contacts.interface";

export const GroupPage = memo(() => {
  const {groupId} = useParams<{ groupId: string }>();
  const contactsState = useSelector((state: InterfaceContacts) => state.contacts);
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto | undefined>();

  useEffect(() => {
    const findGroup:GroupContactsDto | undefined = contactsState.contactGroup.find(({id}:GroupContactsDto) => id === groupId);
    setGroupContacts(findGroup)
    setContacts(() => {
      if (findGroup) {
        return contactsState.contacts.filter(({id}) => findGroup.contactIds.includes(id))
      }
      return [];
    });
  }, [groupId, contactsState.contactGroup, contactsState.contacts]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
});
