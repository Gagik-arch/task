import { makeAutoObservable, runInAction, configure, toJS } from "mobx"
import catApi from '../api/cat'
import { ICategories, ICats } from '../interfaces'


configure({
    enforceActions: "never",
})

class Global {
    public categories: ICategories[] | undefined
    public cats: any[] = []
    public loading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    public getCategories() {
        this.loading = true

        catApi.getCategories<ICategories[]>()
            .then(res => {
                this.categories = res
            })
            .catch(e => {
                console.log(e)
            })
            .then(() => {
                this.loading = false
            })
    }

    public getCatsbyId(categoryId: number) {
        this.loading = true
        catApi.getCatsbyId<ICats[]>(categoryId)
            .then((res: any) => {
                this.cats = res
            })
            .catch(e => {
                console.log(e)
            })
            .then(() => {
                this.loading = false
            })
    }

    public loadMore(categoryId: number) {
        this.loading = true
        catApi.getCatsbyId<ICats[]>(categoryId)
            .then((res: any) => {
                this.cats = [...toJS(this.cats), ...res]
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
