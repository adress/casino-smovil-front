import { useDispatch, useSelector } from "react-redux";
import { rouletteApi } from "../api";
import { onListUsers } from "../store";
import Swal from "sweetalert2";

export const useUserStore = () => {

    const { users } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const startRegister = async ({ email, password, name }) => {

        try {
            const { data } = await rouletteApi.post('/api/v1/users', { email, password, name });
            startListUsers();
        } catch (error) {
            showError(error);
        }
    }

    const startListUsers = async () => {
        try {
            const { data } = await rouletteApi.get('/api/v1/users');
            dispatch(onListUsers(data.data));
        } catch (error) {
            showError(error);
        }
    }


    const startUpdateBalance = async (userId, balance) => {
        try {
            console.log(userId);
            const { data } = await rouletteApi.put(`/api/v1/users/${userId}/balance`, { balance });
            startListUsers();
        } catch (error) {
            showError(error);
        }
    }

    const showError = (error) => {
        Swal.fire({
            title: error.response?.data?.message ?? 'Error!',
            text: JSON.stringify(error.response?.data?.errors) ?? 'Error en la petición',
            timer: 3000,
            timerProgressBar: true
        })
    }


    return {
        users,

        //methods
        startRegister,
        startListUsers,
        startUpdateBalance
    }
};