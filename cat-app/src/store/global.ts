import { makeAutoObservable,toJS,action,observable } from "mobx"
import catApi from '../api/cat'
import { ICategories, ICats } from '../interfaces'

class Global {
    @observable public  categories: ICategories[] | undefined
    @observable public cats: ICats[] = []
    @observable public loading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }
    @action
    public getCategories() {
        this.loading = true

        catApi.getCategories<ICategories[]>()
            .then((res: ICategories[]) => {
                this.categories = res
            })
            .catch(e => {
                console.log(e)
            })
            .then(() => {
                this.loading = false
            })
    }
    @action
    public getCatsbyId(categoryId: number,next:boolean = false) {
        this.loading = true
        catApi.getCatsbyId<ICats[]>(categoryId,next)
            .then((res:ICats[]) => {
                if (next) { 
                    return this.cats = [...toJS(this.cats), ...res]
                }
                this.cats = res
                
            })
            .catch(e => {
                console.log(e)
            })
            .then(() => {
                this.loading = false
            })
    }

 
}

export const global = new Global()
