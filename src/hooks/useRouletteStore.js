import { useDispatch, useSelector } from "react-redux";
import { onLoadHistory, onSpinned, onSpinning } from "../store";
import { rouletteApi } from "../api";
import Swal from "sweetalert2";

export const useRouletteStore = () => {
    const { history, balance } = useSelector(state => state.roulette);


    const dispatch = useDispatch();

    const startRoulette = async (color) => {
        console.log('color :', color);
        try {
            dispatch(onSpinning());
            const { data } = await rouletteApi.get(`/api/v1/colors/${color}/roulette/play`);
            const response = data.data;
            const { winColor, betValue, amount, isWinner } = response;
            Swal.fire('Color Ganador: ' + winColor,
                `
            <ul>
            <li> Color apostado: ${color} </li>
            <li> Cantidad apostada: ${betValue.toLocaleString()} </li>
            <li> Beneficios: ${amount.toLocaleString()} </li>
            </ul>
            `, isWinner ? 'success' : 'error');
            dispatch(onSpinned(response));
        } catch (error) {
            showError(error);
        }
    }

    const startLoadHistory = async () => {
        try {
            const { data } = await rouletteApi.get(`/api/v1/roulette/history`);
            dispatch(onLoadHistory(data.data));
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
        history,
        balance,

        //methods
        startRoulette,
        startLoadHistory
    }
};