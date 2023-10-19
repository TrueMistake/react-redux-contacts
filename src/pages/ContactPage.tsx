import React, {FC} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import {useSelector} from "react-redux";
import {ContactDto} from "src/types/dto/ContactDto";
import {InterfaceContacts} from "src/types/contacts.interface";

export const ContactPage: FC = () => {
  const {contactId} = useParams<{ contactId: string }>();
  const contact = useSelector((state:InterfaceContacts) => state.contacts.contacts.find((item:ContactDto) => item.id === contactId));

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
