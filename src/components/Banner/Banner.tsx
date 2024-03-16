import React, { ReactElement, useEffect, useRef } from 'react';
import styles from './styles';
import { View } from 'react-native';
import { BannerType } from './types';
import PagerView from 'react-native-pager-view';
import Image from '@core/Image';

const Banner = ({}: BannerType): ReactElement => {
    const viewPager = useRef<PagerView>();
    const selected = useRef<number>(0);

    useEffect(() => {
        const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
            selected.current = selected.current > 1 ? 0 : selected.current + 1;
            viewPager.current?.setPage(selected.current);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
      <View style={styles.root}>
          <PagerView style={styles.pagerView}
                     initialPage={0}
                     ref={viewPager}
                     overScrollMode={'always'}
          >
              <Image key={'1'} uri={require('@assets/images/banner1.jpg')} />
              <Image key={'2'} uri={require('@assets/images/banner2.jpg')} />
              <Image key={'3'} uri={require('@assets/images/banner3.jpg')} />
          </PagerView>
      </View>
    );
};

export default Banner;
