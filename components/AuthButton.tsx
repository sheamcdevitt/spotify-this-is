'use client';

import { Button } from '@mui/material';
import React from 'react';
import { authorize } from '../lib/authorize';

type Props = {};

export const AuthButton = () => {
  console.log(process.env.SPOTIFY_CLIENT_ID);
  return (
    <Button variant='contained' color='primary' onClick={authorize}>
      Auth Button
    </Button>
  );
};
