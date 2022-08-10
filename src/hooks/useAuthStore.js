import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from '../api';
import { onChecking, onLogin, onLogout, clearErrorMessage } from "../store";



export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispathc = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispathc(onChecking());
        try {

            const { data } = await calendarApi.post('auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-data', new Date().getTime());
            dispathc ( onLogin({name: data.name, uid: data.uid}));


        } catch (error) {
            dispathc( onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispathc(clearErrorMessage())
            }, 10);
        }
    }

    return {
        // Propiedades
        status,
        user,
        errorMessage,
        // Métodos
        startLogin,
    }
}

