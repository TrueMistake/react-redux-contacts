import React, {memo, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import {useSelector} from "react-redux";
import {InterfaceContacts} from "src/types/contacts.interface";

export const FavoritListPage = memo(() => {
  const contactsState = useSelector((state: InterfaceContacts) => state.contacts);
  const {contacts, favorite} = contactsState;
  const [favorites, setFavorites] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (contacts.length > 0) {
      const favoriteArray = Array.isArray(favorite) ? favorite : [favorite];
      setFavorites(() => contacts.filter((item:ContactDto) => favoriteArray.includes(item.id)));
    }
  }, [contacts, favorite])

  return (
    <Row xxl={4} className="g-4">
      {favorites.map((favorite) => (
        <Col key={favorite.id}>
          <ContactCard contact={favorite} withLink />
        </Col>
      ))}
    </Row>
  );
})
