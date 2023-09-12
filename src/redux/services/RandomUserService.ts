import { AxiosResponse } from 'axios';
import { UserIF } from '../../interfaces/User';
import API from './Api';

export interface ResponseIF {
  results: UserIF[];
  info: any;
}
export const getUsers = (limit: number = 10): Promise<AxiosResponse> => {
  return API.get(
    `https://randomuser.me/api/?inc=gender,name,dob,email,picture,phone&results=${limit}`
  );
};
