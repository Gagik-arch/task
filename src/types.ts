type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type BodyType = {
    [key: string]: string
}
export type RequiredMessageType = {
    [key: string]: string
}

export type ChangeEventType = {
    text: string
    isValid?: boolean | undefined
    name: string | undefined
}

export type User = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token?: string
}

export type Product = {
    brand: string
    category: string
    description?: string
    discountPercentage?: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string

}

export type HomeProducts = {
    name: string
    products: Product[];
}

export type ProductStore = {
    isLoading: boolean
    wishList: string[]
    homeProducts: HomeProducts[]
    allProducts:Product[]
    countInDB:number
}

export type UserStore = {
    isLoading: boolean
    data: null | User
}
