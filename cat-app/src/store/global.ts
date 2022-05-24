import { makeAutoObservable, runInAction, configure, toJS } from "mobx"
import catApi from '../api/cat'
import { ICategories, ICats } from '../interfaces'


configure({
    enforceActions: "never",
})

class Global {
    public categories: ICategories[] | undefined
    public cats: ICats[] = []
    public loading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

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
