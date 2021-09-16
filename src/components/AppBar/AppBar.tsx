import React from 'react';

import logo from 'logo.svg';

export const AppBar: React.FC = () => (
    <header>
      <img data-testid="logo" src={logo} alt="Killergram" />
    </header>
  );
