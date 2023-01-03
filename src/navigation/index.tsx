import React from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Loading, SideBar } from '../components'

const Home = React.lazy(() => import('../pages/Home'))
const Curriculum = React.lazy(() => import('../pages/Curriculum'))
const Projects = React.lazy(() => import('../pages/Projects'))

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<SideBar />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/curriculum" element={<Curriculum />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router
