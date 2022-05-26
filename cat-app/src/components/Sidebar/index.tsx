import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { global } from 'store'
import s from './index.module.css'
import { NavLink } from 'react-router-dom'

export const Sidebar: FC = observer(() => {
  const { categories } = global
  let selectedCategory: number

  useEffect(() => {
    categories?.length && global.getCatsbyId(categories[0].id)
  }, [categories])

  const selectCategory = (category: number): void => {
    selectedCategory = category
    global.getCatsbyId(category)
  }

  const loadMore = () => global.getCatsbyId(selectedCategory, true)

  return (
    <div className={s.container}>
      <div className={s.block}>
        {categories?.map((category: any, index: number) => {
          return (
            <NavLink
              to={'/' + category.name}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? [s.category, s['category_active']].join(' ')
                  : s.category
              }
              onClick={() => {
                selectCategory(category.id)
              }}
            >
              {category.name}
            </NavLink>
          )
        })}
      </div>
      <div className={s.loadMore} onClick={loadMore}>
        Load more
      </div>
    </div>
  )
})
