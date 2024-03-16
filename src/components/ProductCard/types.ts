import { Product } from '@types';

export type ProductProps = {
    product:Product
    isInWishList?:boolean,
    onPressHeart?:()=>void,
    onPress?:()=>void,
}
