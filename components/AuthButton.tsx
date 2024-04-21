'use client';

import { Button } from '@mui/material';
import React from 'react';
import { authorize, fuck } from '../lib/authorize';

type Props = {};

export const AuthButton = (props: Props) => {
  return (
    <Button variant='contained' color='primary' onClick={fuck}>
      Auth Button
    </Button>
  );
};
