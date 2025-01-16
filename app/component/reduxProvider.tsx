'use client'; // Ensure this is a Client Component
import React from 'react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
