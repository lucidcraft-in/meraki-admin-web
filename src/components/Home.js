import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Welcome to Meraki </h1>
      <Link to="/customer/create">Create Customer</Link>{' '}
      <Link to="/customer/update">update Customer</Link>{' '}
    </>
  );
}

export default Home;
