import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import s from './index.module.css'
import { global } from 'store'
import { Card } from 'components'
import { Loader } from 'core'

export const Content: FC = observer(() => {
  return (
    <div className={s.container}>
      {global.loading && global?.cats?.length > 10 && <Loader />}

      <div className={s.block}>
        {global.loading && global?.cats?.length <= 10 ? (
          <Loader />
        ) : global?.cats?.length ? (
          global.cats?.map((cat: any, index: number) => (
            <Card id={cat.id} key={index} image={cat.url} index={index} />
          ))
        ) : (
          'There is not content'
        )}
      </div>
    </div>
  )
})
