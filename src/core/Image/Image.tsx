import * as RN from 'react-native';
import { ReactElement, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './styles';
import { Dimensions, ImageType } from './types.ts';

const Image = ({ uri, style = {} }: ImageType): ReactElement => {
  const [size, setSize] = useState<null | Dimensions>(null);
  const [dim, setDim] = useState<null | Dimensions>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof uri === 'number') {
      const i: RN.ImageResolvedAssetSource = RN.Image.resolveAssetSource(uri);

      setSize({ width: i.width, height: i.height });
    } else {
      RN.Image.getSize(uri, async (width: number, height: number) => {
          setSize({ width, height });
        },
        (e) => {
          // console.log(e);
        });
    }
  }, []);

  return (
    <RN.View style={[styles.root]}
             onLayout={({ nativeEvent }) => {
               setDim(nativeEvent.layout);
             }}
    >
      <RN.Image source={typeof uri === 'number' ? uri : { uri }}
                style={[{
                  width: '100%',
                  height: size && dim ? (dim.width / (size.width / size.height)) : 0,
                }, style]}
                onLoadEnd={() => {
                  setIsLoading(false);
                }}
      />
      {isLoading &&  <ActivityIndicator style={styles.loader}/>}
    </RN.View>
  );
};

export default Image;
