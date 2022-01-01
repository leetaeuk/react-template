import React, {lazy} from "react"
import {Route, BrowserRouter, Routes} from "react-router-dom"

// Route-based code splitting
const MainView = lazy(() => import("./views/main/Main"));
const NotFoundView = lazy(() => import("./views/error/404"))
const UserSearchView = lazy(() => import("./views/user/UserSearch"))

function Suspense(props) {
    return null;
}

class AppRouter extends React.Component {
    render() {
        return (
            // Set the directory path if you are deploying in sub-folder
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={
                        <React.Suspense fallback={<>now loading</>}>
                            <MainView />
                        </React.Suspense>
                    }/>
                    <Route exact path="/UserSearch" element={
                        <React.Suspense fallback={<>now loading</>}>
                            <UserSearchView />
                        </React.Suspense>
                    }/>
                    <Route exact path="/404" element={
                        <React.Suspense fallback={<>now loading</>}>
                            <NotFoundView />
                        </React.Suspense>
                    }/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter
