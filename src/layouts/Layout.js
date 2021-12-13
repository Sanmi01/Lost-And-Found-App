import React from 'react'

export default function Layout({children}) {
    return (
        <>
        <div>
            <h3>NavBar</h3>
        </div>
        <div className=''>
            {children}
        </div>
        </>
    )
}


