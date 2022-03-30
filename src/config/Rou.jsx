import React from 'react'
import Home from "../pages/Home"
import { Route, Routes } from 'react-router-dom'
import StoreProvider from '../context/StoreContext'

function Rou() {
    return (
        <StoreProvider>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/TypewriterLetter" element={<Home />} />
            </Routes>
        </StoreProvider>
    )
}
export default Rou