import React, { FC, useEffect, useState } from 'react'
import { observer } from "mobx-react-lite"
import { global } from '../../store'
import s from './index.module.css'
import { NavLink } from 'react-router-dom'

export const Sidebar: FC = observer(( ) => {
    const [selectedCategory, setSelectedCategory] = useState<number>(5)

    useEffect(() => {
        global?.categories?.length && setSelectedCategory(global.categories[0].id)
        global.getCatsbyId(selectedCategory)
    }, [])
    
    useEffect(() => {
        global.getCatsbyId(selectedCategory)
    }, [selectedCategory])
    
    const selectCategory = (category: number): void => {
        setSelectedCategory(category)
    }

    const loadMore = () => {
         global.getCatsbyId(selectedCategory,true)
    }

    return <div className={s.container}>
        <div className={s.block}>
            {
                global.categories?.map((category: any, index: number) => {
                    
                  return  <NavLink to={'/' + category.name}
                        className={s.category}
                      onClick={() => { 
                          selectCategory(category.id)
                      }}
                        key={index}>
                        {category.name}
                    </NavLink>
})
            }
        </div>
        <div className={s.loadMore} onClick={loadMore}>Load more</div>
    </div>
})