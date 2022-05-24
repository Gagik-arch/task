export interface ICategories {
    id: number; name: string
}

export interface ICats {
    categories: ICategories[]
    breeds?: [];
    id: string;
    height: number;
    width: number;
    url: string;
}


