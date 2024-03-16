import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles.ts';
import Image from '@core/Image';
import Text from '@core/Text';
import { ProductProps } from './types.ts';
import Edges from '@resources/edges.ts';
import Icon from '@core/Icon';
import Button from '@core/Button';
import Colors from '@resources/colors.ts';

const ProductCard = ({
                         product,
                         isInWishList = false,
                         onPressHeart,
                         onPress,
                     }: ProductProps): ReactElement => {

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
      >
          <Image
            uri={product.thumbnail || 'https://odoo-community.org/web/image/product.product/19823/image_1024/Default%20Product%20Images?unique=d50cedd'}
            style={{
                width: '100%',
                height: 180,
            }} />
          <Text
            numberOfLines={1} size={'16_600'}
            style={{ ...Edges.padding(8) }}
          >
              {product.title}
          </Text>
          <Button
            style={styles.wash_list_btn}
            onPress={() => {
                onPressHeart?.();
            }}
          >
              <Icon
                fillColor={isInWishList ? Colors.purple : undefined}
                strokeColor={Colors.purple} name={'Heart'}
              />
          </Button>
      </TouchableOpacity>
    );
};

export default ProductCard;
