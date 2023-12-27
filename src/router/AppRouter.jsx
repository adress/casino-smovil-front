import { useEffect } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
// import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';
import { RouletteRoutes } from '../roulette/routes/RouletteRoutes';


export const AppRouter = () => {

    const { status, user, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])



    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }


    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={<LoginPage />} />
                            <Route path="/*" element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/*" element={<RouletteRoutes isAdmin={user.isAdmin} />} />
                        </>
                    )
            }

        </Routes>
    )
}
