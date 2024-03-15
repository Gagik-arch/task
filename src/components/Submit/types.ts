import { BodyType } from '@types';
import {User} from '@store/user';
import { ButtonProps } from '../../core/Button';

export interface SubmitProps extends ButtonProps{
  body:BodyType,
  userStore:User
}
