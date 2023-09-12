import * as React from 'react';

export const navigationRef: any = React.createRef();
export const isReadyRef = React.createRef();

export const navigate = (name: string, params?: any) =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.navigate(name, params);

export const dispatch = (params: any) =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.dispatch(params);

export const getRootState = () =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.getRootState();
