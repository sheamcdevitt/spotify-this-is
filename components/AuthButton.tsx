'use client';

import { Button } from '@mui/material';
import React from 'react';
import { authorize } from '../lib/authorize';

type Props = {};

export const AuthButton = () => {
  return (
    <Button variant='contained' color='primary' onClick={authorize}>
      Auth Button
    </Button>
  );
};
