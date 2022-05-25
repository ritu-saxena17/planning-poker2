import React from 'react';
import { getCardImage } from '../../utils';
import { useStyles } from './styles';

type Props = {
  choice: number | string;
  onClick: () => void;
  selectedNumberCard: number | string;
};

export const NumberCard: React.FC<Props> = ({
  choice,
  onClick,
  selectedNumberCard,
}) => {
  const styles = useStyles();
  return (
    <div
      className={`${styles.NumberCard} ${selectedNumberCard !== 0 &&
        selectedNumberCard === choice &&
        styles.NumberSelected} `}
      onClick={onClick}
    >
      {typeof choice === 'string' ? (
        <img className={styles.Image} src={getCardImage(choice)} alt={choice} />
      ) : (
        choice
      )}
    </div>
  );
};
