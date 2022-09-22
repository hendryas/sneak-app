import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // useRoutes,
} from 'react-router-dom'
import {
    DashboardSuperAdmin,
    NavigationMaster
} from '../pages'
import {
    HeaderContent,
    FooterContent
} from '../components'

const MainContent = () => {
    return (
        <>
            <Router>
                <HeaderContent />
                <Routes>
                    <Route path="" element={
                        <DashboardSuperAdmin />
                    }></Route>
                    <Route path="navigationmaster" element={<NavigationMaster />}></Route>
                </Routes>
                <FooterContent />
            </Router>

        </>
    )
}

export default MainContent