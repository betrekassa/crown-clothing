import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import './styles/sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;