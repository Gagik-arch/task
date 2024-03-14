import * as Icons from '@assets/icons';

export type IconProps = {
  size?: number;
  name: keyof typeof Icons;
  strokeColor?:string
};
