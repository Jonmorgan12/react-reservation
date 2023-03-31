import React from 'react';
import { ToastPropTypes } from '../../Types/global';
import '../../Styles/Toast.css';

const Toast = ({ currentInfo, error }: ToastPropTypes) => {
  const { name, guests, date, time } = currentInfo;

  const successMessage = `Thank you for confirming your reservation! ${name} ${time} ${date} for ${guests} people.`;

  const errorMessage = 'Please select a valid option for each dropdown!';

  return (
    <div className={`${'toast'} ${error ? 'error' : 'success'}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="icon"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p data-testid="success" className="toast-text">
        {error ? errorMessage : successMessage}
      </p>
    </div>
  );
};
export default Toast;
