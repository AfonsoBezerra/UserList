import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext';

export const useDataContext = () => useContext(UserDataContext);
