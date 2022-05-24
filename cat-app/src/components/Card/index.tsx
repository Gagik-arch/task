import React, { FC, useEffect, useState } from 'react'
import { observer } from "mobx-react-lite"
import { global } from '../../store'
import s from './index.module.css'

interface ICard {
    id: string,
    image: string,
    index: number
}

export const Card: FC<ICard> = ({ id, image, index }) => {

    return <div className={s.container} style={{
        animationDelay: (index * 70) + 'ms'
    }}

    >
        <img src={image} className={s.image} alt="card" />

        <div className={s.id}>
            {id}
        </div>
    </div>
}