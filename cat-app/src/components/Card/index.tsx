import React, { FC, useEffect, useState } from 'react'
import { observer } from "mobx-react-lite"
import { global } from '../../store'
import s from './index.module.css'

interface ICard {
    id: string,
    image: string,
    index: number
}

export const Card: FC<ICard> = observer(({ id, image, index }: ICard) => {

    return <div className={s.container} style={{
        animationDelay: global.loading ? '280ms' : (index * 70) + 'ms'
    }}

    >
        <img src={image} className={s.image} alt="image" />

        <div className={s.id}>
            {id}
        </div>
    </div>
})