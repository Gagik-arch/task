import Api from './index.'
import { ICategories,ICats } from '../interfaces'

class CatApi extends Api {
    private limit: number
    
    constructor() { 
        super()
        this.limit = 1
    }
    getCategories<ICategories>() {
        return this.get<ICategories>('/categories')
    }

    getCatsbyId<ICats>(categoryId: number, next:  boolean = false) {
        next ? ++this.limit : this.limit = 1
        
        return this.get<ICats>(`/images/search?limit=10&page=${this.limit}&category_ids=${categoryId}`)
    }
}

const catApi = new CatApi()

export default catApi