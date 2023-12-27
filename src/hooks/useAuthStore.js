import { useDispatch, useSelector } from 'react-redux';
import { rouletteApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await rouletteApi.post('/api/auth/login', { email, password });
            const response = data.data;
            localStorage.setItem('token', response.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: response.name, isAdmin: response.isAdmin }));

        } catch (error) {
            console.log('error :', error);
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }


    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await rouletteApi.get('/api/auth/token/renew');
            const response = data.data;
            localStorage.setItem('token', response.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: response.name, isAdmin: response.isAdmin }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        // dispatch(onLogoutCalendar());
        dispatch(onLogout());
    }



    return {
        //* Propiedades
        errorMessage,
        status,
        user,

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
    }

}