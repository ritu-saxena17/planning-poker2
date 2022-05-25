import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NumberCard } from '../../components/NumberCard';
import { useGlobalContext } from '../../context/AppContext';
import { fibonacciSequence, generateNonNumberChoices } from '../../utils';
import { collection, addDoc } from 'firebase/firestore';
import firestoreDb from '../../config/firebase';
import { useStyles } from './styles';

export const Game = () => {
  const [selectedNumberCard, setSelectedNumberCard] = React.useState<
    number | string
  >(0);
  const { values, setRoomId } = useGlobalContext();
  const { id } = useParams();
  const fibonacciList = [...generateNonNumberChoices(), ...fibonacciSequence()];
  const styles = useStyles();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) setRoomId(id);
    if (values.name === '') {
      navigate('/join');
    }
  }, [values, id]);

  const onClick = (item: number | string) => {
    if (item !== selectedNumberCard) setSelectedNumberCard(item);
    else setSelectedNumberCard(0);
  };
  const addPointsToFirebase = async (id: string) => {
    await addDoc(collection(firestoreDb, 'Rooms', id, "User's Data"), {
      name: values.name,
      point: selectedNumberCard,
    });
  };

  const startTimer = () => {
    setTimeout(() => {
      // if (selectedNumberCard === 0) {
      //   setSelectedNumberCard(NON_NUMBER_CHOICE.NOT_SELECTED);
      // }
      if (id) addPointsToFirebase(id);
    }, 5000);
  };

  return (
    <div>
      <div className={styles.Header}>
        <div className={styles.NameAvatar}>{values.name[0]}</div>
        <div className={styles.NameText}>{values.name}</div>
      </div>
      <div className={styles.NumberCardWrapper}>
        {fibonacciList.map((item) => {
          return (
            <NumberCard
              choice={item}
              key={item}
              onClick={() => onClick(item)}
              selectedNumberCard={selectedNumberCard}
            />
          );
        })}
      </div>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
};
