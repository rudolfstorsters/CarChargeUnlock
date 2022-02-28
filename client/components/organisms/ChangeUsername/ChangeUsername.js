import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import R from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

import Title from 'react-bulma-companion/lib/Title';
import Field from 'react-bulma-companion/lib/Field';
import Control from 'react-bulma-companion/lib/Control';
import Label from 'react-bulma-companion/lib/Label';
import Input from 'react-bulma-companion/lib/Input';
import Icon from 'react-bulma-companion/lib/Icon';
import Help from 'react-bulma-companion/lib/Help';
import Button from 'react-bulma-companion/lib/Button';

import { attemptUpdateUser } from '_thunks/user';

export default function ChangeUsername() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    if (!R.isEmpty(user)) {
      setEmail(user.email);
    }
  }, [user.username]);

  const updateEmail = e => setEmail(e.target.value);

  const disabled = (user.email === email)
    || email.toLowerCase() !== user.username;

  const saveEmail = () => {
    if (email.toLowerCase() === user.username) {
      const updatedUser = { username_case: email };

      dispatch(attemptUpdateUser(updatedUser))
        .catch(() => setEmail(user.email));
    }
  };

  const helpMessage = disabled ? `Username case must match: ${user.username}` : 'Username case valid.';

  return (
    <div className="FormField">
      <Title size="3">
        Email
      </Title>
      <Field>
        <Label htmlFor="username">
          Current Email
        </Label>
        <Control className="control">
          {user.email}
        </Control>
      </Field>
      <Field >
        <Label htmlFor="username-case"/>
        <Control iconsRight>
          <Input
          className="inputField"
            id="username-case"
            color={disabled ? (email !== user.email ? 'danger' : undefined) : 'success'}
            placeholder="New Email"
            value={email}
            onChange={updateEmail}
          />
          {disabled && (email !== user.email) && (
            <Icon
              size="small"
              align="right"
              color={disabled ? (email !== user.email ? 'danger' : undefined) : 'success'}
            >
              <FontAwesomeIcon
                icon={disabled ? (email !== user.email && faExclamationTriangle) : faCheck}
              />
            </Icon>
          )}
        </Control>
        {email !== user.email && (
          <Help color={disabled ? 'danger' : 'success'}>
            {helpMessage}
          </Help>
        )}
      </Field>
      <button
        color="success"
        disabled={disabled}
        onClick={saveEmail}
      >
        Save
      </button>
    </div>
  );
}
