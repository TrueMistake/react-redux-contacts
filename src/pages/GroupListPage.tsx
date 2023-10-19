import React, {memo} from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {useSelector} from "react-redux";
import {InterfaceContacts} from "src/types/contacts.interface";

export const GroupListPage = memo(() => {
  const groupContactsState = useSelector((state: InterfaceContacts) => state.contacts.contactGroup);

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
