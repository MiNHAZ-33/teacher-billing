import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <div>Navbar</div> */}
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Navbar