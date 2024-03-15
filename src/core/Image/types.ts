import { ImageStyle  } from 'react-native';

export type ImageType = {
  uri:string | number,
  style?:ImageStyle,

}

export type Dimensions = {
  width:number,
  height:number
}
