import React, { ComponentType } from 'react';
import { useGlobalContext } from '../context/AppContext';

export const HOC: React.FC<ComponentType> = (
  WrappedComponent: ComponentType
) => {
  const { values } = useGlobalContext();
  return <WrappedComponent />;
};
