import React, { FC } from 'react'

export const Loader: FC = () => {

    return <div style={{
        position: 'absolute',
        zIndex: 999
    }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Loader.gif" alt="" />
    </div>
}