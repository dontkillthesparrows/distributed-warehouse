import React from 'react';
import { SVG } from './Style';

const IconNew = () => {
  return (
    <SVG width="17" height="17" viewBox="0 0 16 16">
      <path d="M10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
    </SVG>
  );
};

const IconPacked = () => {
  return (
    <SVG width="17" height="17" viewBox="0 0 16 16">
      <path d="M6 1h10v2h-10v-2zM6 7h10v2h-10v-2zM6 13h10v2h-10v-2zM0 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM0 8c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM0 14c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"></path>
    </SVG>
  );
};

const IconInProcess = () => {
  return (
    <SVG width="17" height="17" viewBox="0 0 16 16">
      <path d="M12.055 5c0.283-0.201 0.555-0.425 0.804-0.674 0.522-0.522 0.871-1.164 0.983-1.808 0.123-0.706-0.057-1.362-0.494-1.798-0.348-0.348-0.82-0.533-1.365-0.533-0.775 0-1.593 0.372-2.242 1.021-1.039 1.039-1.644 2.472-1.97 3.496-0.241-1.028-0.722-2.416-1.657-3.351-0.501-0.501-1.142-0.759-1.748-0.759-0.495 0-0.965 0.172-1.317 0.523-0.781 0.781-0.675 2.153 0.236 3.064 0.325 0.325 0.705 0.595 1.105 0.819h-3.391v4h1v7h12v-7h1v-4h-2.945zM10.536 2.003c0.433-0.433 0.974-0.692 1.446-0.692 0.167 0 0.402 0.035 0.57 0.203 0.407 0.407 0.178 1.349-0.489 2.016-0.687 0.687-1.61 1.159-2.413 1.47h-0.792c0.29-0.899 0.813-2.132 1.678-2.997zM3.655 2.514c-0.011-0.143-0.001-0.41 0.191-0.601 0.16-0.16 0.372-0.194 0.521-0.194v0c0.332 0 0.679 0.157 0.952 0.429 0.529 0.529 0.965 1.371 1.26 2.436 0.008 0.029 0.016 0.057 0.023 0.086-0.028-0.008-0.057-0.015-0.086-0.023-1.064-0.295-1.906-0.731-2.436-1.26-0.247-0.247-0.403-0.565-0.426-0.872zM7 15h-4v-6.5h4v6.5zM7 8h-5v-2h5v2zM13 15h-4v-6.5h4v6.5zM14 8h-5v-2h5v2z"></path>
    </SVG>
  );
};

const IconDelivered = () => {
  return (
    <SVG width="17" height="17" viewBox="0 0 16 16">
      <path d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"></path>
    </SVG>
  );
};

const IconRejected = () => {
  return (
    <SVG width="17" height="17" viewBox="0 0 16 16">
      <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
    </SVG>
  );
};

export { IconNew, IconPacked, IconInProcess, IconDelivered, IconRejected };