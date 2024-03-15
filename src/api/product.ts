import Api from './index';
import { Product } from '@types';

class ProductApi extends Api {
  constructor() {
    super('/products');
  }
  public getCategories(): Promise<string[]> {
    return this.get<string[]>({ url: '/categories' });
  }

  public getProductsByCategory(categoryName:string,query:string = ''):Promise<{
    total: number
    skip: number
    limit: number
    products:Product[]
  }>{
    return this.get<{
      total: number
      skip: number
      limit: number
      products:Product[]
    }>({url:`/category/${categoryName}${query}`});
  }
}

const productApi:ProductApi = new ProductApi();

export default productApi;
