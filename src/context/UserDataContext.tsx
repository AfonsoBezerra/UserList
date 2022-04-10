import { IDataUserApi } from '@interfaces/IDataUserApi';
import React, {
  createContext, useEffect, useMemo, useState
} from 'react';
import { getDataApi } from '../services/getDataApi';

interface IData {
  gender: string,
  fullName: string,
  id: string,
  formattedDate: string,
  thumbnail: string,
  email: string,
  phone: number,
  local: string,
  address: string
}
type value = { results: IData }
interface IContext {
  fetchData: () => Promise<void>,
  values: value
}
const URL_DATA_FETCH = () => ('https://randomuser.me/api/');
const UserDataContext = createContext<IContext>({} as IContext);

export const UserDataProvider: React.FC = ({ children }) => {
  const [dataUser, setDataUser] = useState<any | null>(null);
  const [values, setValues] = useState<value>({} as value);
  async function fetchData() {
    try {
      const dataFetch = await getDataApi<any>(URL_DATA_FETCH());
      setDataUser(dataFetch);
    } catch {
      console.log('Fetch não foi completado');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (dataUser) {
      const {
        gender,
        name,
        login: {
          uuid: id
        },
        dob: {
          date
        },
        picture: {
          large: thumbnail
        },
        email,
        phone,
        location: {
          country,
          state,
          street: {
            name: nameadress,
            number
          }
        }
      } = dataUser.results[0] as IDataUserApi;
      const newDate = date.split('T')[0];
      const splitedDate = newDate.split('-');
      const formattedDate = `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
      const fullName = `${name.first} ${name.last}`;
      const local = `${state}, ${country}`;
      const address = `${nameadress} - ${number}`;
      setValues(
        {
          results: {
            gender,
            fullName,
            id,
            formattedDate,
            thumbnail,
            email,
            phone,
            local,
            address
          }
        }
      );
    }
  }, [dataUser]);

  const contextValues = useMemo(() => ({ values, fetchData }), [values]);
  return (
    <UserDataContext.Provider value={contextValues}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
