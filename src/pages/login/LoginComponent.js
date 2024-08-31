import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../../utils/services';

const LoninComponent = ({ loginObj, login }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkAuth()) {
      navigate('/dashboard')
    }
  }, [loginObj]);

  useEffect(() => {
    if (loginObj?.error) {
      alert("Given credentials not matched");
      // notification.error({
      //   message: 'Login Notification',
      //   description: 'Given credentials not matched.',
      // })
    }
  }, [loginObj])

  return (
    <>
      <button onClick={() => login({username: "karthi", pwd: "1234"})}>Login</button>
    </>
  );
}

export default LoninComponent;
