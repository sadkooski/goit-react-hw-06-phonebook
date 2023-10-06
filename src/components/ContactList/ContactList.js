import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
// import { useSelector } from 'react-redux';

export const ContactList = ({ id, number, name }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li key={id}>
          {name} {number}
          <button onClick={() => dispatch(deleteContact(id))} name={name}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};
