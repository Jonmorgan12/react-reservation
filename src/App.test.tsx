import { render, fireEvent, screen, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('render restaurants', async () => {
  render(<App />);

  await userEvent.click(screen.getAllByText('Reserve')[0]);

  await screen.findByRole('heading');
  const guestDropdownElem = screen.getByTestId('guests');
  await userEvent.selectOptions(guestDropdownElem, '2');

  const daysDropdownElem = screen.getByTestId('days');
  await userEvent.selectOptions(daysDropdownElem, 'Tuesday');

  const timeDropdownElem = screen.getByTestId('times');
  await userEvent.selectOptions(timeDropdownElem, '5:30pm');

  await userEvent.click(screen.getByText('Reserve'));

  const successMessage = screen.getByTestId('success');

  expect(successMessage).toHaveTextContent(
    'Thank you for confirming your reservation! Princes Hot Chicken 5:30pm Tuesday for 2 people.'
  );
});
