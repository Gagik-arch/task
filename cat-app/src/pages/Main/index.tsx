import { FC, useEffect } from 'react'
import s from './index.module.css'
import { global } from '../../store'
import { Sidebar, Content } from '../../components'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
    Space,
    Boxes,
    Sunglasses,
    Tie,
    Hats,
    Clothes,
    Sinks
} from '../index'

export const Main: FC = () => {
    useEffect(() => {
        console.log()
        global.getCategories()
    }, [])

    return (
        <div className={s.container}>
            <Sidebar />
            <Routes>
                <Route path="/boxes" element={<Boxes />} />
                <Route path="/clothes" element={<Clothes />} />
                <Route path="/hats" element={<Hats />} />
                <Route path="/sinks" element={<Sinks />} />
                <Route path="/space" element={<Space />} />
                <Route path="/sunglasses" element={<Sunglasses />} />
                <Route path="/tie" element={<Tie />} />
                <Route path="*" element={<Navigate to="/boxes" replace />} />
            </Routes>
        </div>
    )
}
