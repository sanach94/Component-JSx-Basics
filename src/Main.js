import React from 'react';

import ProfilPhoto from './Profile/ProfilPhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
import './Main.css';
function Main() {
  return (
    <div className="Main">
      <FullName/>
      <ProfilPhoto/>
      <Address/>
    </div>
  );
}

export default Main;