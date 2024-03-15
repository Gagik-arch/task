import Api from './index';
import { BodyType, User } from '@types';

class UserApi extends Api {
  constructor() {
    super('/auth');
  }
  public auth(body:BodyType): Promise<User> {
    return this.post<User>({ url: '/login' ,body});
  }

  public me(): Promise<User> {
    return this.get<User>({ url: '/me' });
  }
}

const userApi:UserApi = new UserApi();

export default userApi;
