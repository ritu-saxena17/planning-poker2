import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useStyles } from './styles';
import { useForm } from '../../hooks/useForms';
import firestoreDb from '../../config/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useGlobalContext } from '../../context/AppContext';

export const JoinPlanningPoker = () => {
  const navigate = useNavigate();
  const { roomId } = useGlobalContext();
  const { values, onChange, validate } = useForm();
  const styles = useStyles();
  const unique_id = uuid();

  const addRoomIdToFirebase = async (roomId: string) => {
    // await setDoc(doc(firestoreDb, 'Rooms', roomId), {
    //   createdBy: values.name,
    //   roomId,
    // });
    await setDoc(doc(firestoreDb, 'Rooms', roomId, "User's Data", id), {
      userId: id,
      createdBy: values.name,
      roomId,
    });
  };

  const createRoom = () => {
    let id;
    if (roomId === '') {
      id = unique_id.slice(0, 8);
      addRoomIdToFirebase(id);
    } else {
      id = roomId;
    }
    navigate(`/game/${id}`);
  };

  return (
    <form className={styles.FormWrapper}>
      <label className={styles.Label}>Your Name *</label>
      <input
        type='text'
        name='Name'
        placeholder='Best Engineer'
        required
        value={values.name}
        onChange={(event) => onChange('name', event.target.value)}
        onBlur={() => validate('name')}
        className={styles.Input}
      />

      <label className={styles.Label}>
        <input
          type='checkbox'
          name='spectator'
          value={String(values.spectator)}
          onChange={() => onChange('spectator', !values.spectator)}
        />
        Join as spectator
      </label>

      <button
        type='submit'
        onClick={createRoom}
        disabled={!Boolean(values.name)}
        className={styles.Button}
      >
        Create Room
      </button>
    </form>
  );
};
