// src/Header/Header.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { resetCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(logout()); // Dispatch logout action
  dispatch(resetCart());
  navigate('/'); // Redirect to home after logging out
  return (
    null
  );
};

export default Logout;
