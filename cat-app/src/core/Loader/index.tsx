import React, { FC } from 'react'
import s from './index.module.css'

export const Loader: FC = () => {

    return (
        <div className={s['lds-roller']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}