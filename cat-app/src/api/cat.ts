import { ICats } from './../interfaces/index';
import Api from './index.'
import { ICategories } from '../interfaces'

class CatApi extends Api {

    getCategories<ICategories>() {
        return this.get<ICategories>('/categories')
    }

    getCatsbyId<ICats>(categoryId: number, limit: number = 1) {
        ++limit
        return this.get(`/images/search?limit=10&page=${limit}&category_ids=${categoryId}`)
    }
}

const catApi = new CatApi()

export default catApi