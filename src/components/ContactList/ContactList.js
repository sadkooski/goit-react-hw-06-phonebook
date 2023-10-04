import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactList = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>
          {name} {number}
        </li>
        <button onClick={() => dispatch(deleteContact(id))} name={name}>
          Delete
        </button>
      </ul>
    </div>
  );
};
