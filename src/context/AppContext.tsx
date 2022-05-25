import React, { createContext, useContext } from 'react';

export type FormValueType = {
  id: string;
  name: string;
  spectator: Boolean;
};
export type GlobalContent = {
  values: FormValueType;
  setValues: React.Dispatch<React.SetStateAction<FormValueType>>;
  roomId: string;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
};
export const AppContext = createContext<GlobalContent>({
  values: { name: '', spectator: false, id: '' },
  setValues: () => {},
  roomId: '',
  setRoomId: () => {},
});

/**
 *
 * @param param0
 * @returns the global state of form Values
 */
export const AppState: React.FC = ({ children }) => {
  const [values, setValues] = React.useState<FormValueType>({
    name: '',
    spectator: false,
    id: '',
  });
  const [roomId, setRoomId] = React.useState<string>('');
  return (
    <AppContext.Provider value={{ values, setValues, roomId, setRoomId }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
