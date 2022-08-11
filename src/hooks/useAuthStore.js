import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from '../api';
import { onChecking, onLogin, onLogout, clearErrorMessage, onLogoutCalendar } from "../store";



export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispathc = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispathc(onChecking());
        try {

            const { data } = await calendarApi.post('auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-data', new Date().getTime());
            dispathc(onLogin({ name: data.name, uid: data.uid }));


        } catch (error) {
            dispathc(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispathc(clearErrorMessage())
            }, 10);
        }
    }

    const startRegister = async ({ name, email, password }) => {
        dispathc(onChecking());
        try {
            const { data } = await calendarApi.post('auth/new', { name, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-data', new Date().getTime());
            dispathc(onLogin({ name: data.name, uid: data.uid }))


        } catch (error) {
            dispathc(onLogout(error.response.data?.msg || 'Datos de registro incorrectos, o duplicados'));
            setTimeout(() => {
                dispathc(clearErrorMessage())
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispathc(onLogout());
        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-data', new Date().getTime());
            localStorage.setItem('token', data.token);
            dispathc(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            localStorage.clear();
            dispathc(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispathc(onLogoutCalendar())
        dispathc(onLogout());
    }

    return {
        // Propiedades
        status,
        user,
        errorMessage,
        // Métodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}

