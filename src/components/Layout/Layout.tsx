import React from 'react';
import { useStyles } from './styles';

export const Layout: React.FC = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.Root}>
      <div>{props.children}</div>
    </div>
  );
};
