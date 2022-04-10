import axios from 'axios';

export async function getDataApi<T>(url: string) {
  const { data } = await axios.get<T>(url);
  return data;
}
