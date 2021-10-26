import Heading from 'components/Heading';
import { useTheme } from 'context/ThemeContext';
import React from 'react';
import { Dropdown, ListGroup } from 'react-bootstrap';

const Settings = () => {
  const { theme, chooseTheme } = useTheme();
  return (
    <>
      <Heading title='Your Account Settings' />
      <ListGroup.Item className='py-3 px-4' as='div'>
        <Heading title='Choose App Color Theme' />
        <Dropdown className='mt-3'>
          <Dropdown.Toggle
            variant='success'
            id='dropdown-basic'
            className='w-50'>
            {theme === 'dark'
              ? 'Dark'
              : theme !== null && theme === 'light'
              ? 'Light'
              : 'Choose Color Mode'}
          </Dropdown.Toggle>

          <Dropdown.Menu className='w-50 bg-dark text-white'>
            <Dropdown.Item
              name='light'
              className='text-white'
              onClick={chooseTheme}>
              Light
            </Dropdown.Item>
            <Dropdown.Item
              name='dark'
              onClick={chooseTheme}
              style={{ backgroundColor: 'darkgray', color: 'beige' }}>
              Dark
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
    </>
  );
};

export default Settings;
