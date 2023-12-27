import { NavLink, Navigate } from "react-router-dom"
import { Navbar } from "../../components/Navbar"

export const RouletteHomePage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h2>
                    Bienvenido a la ruleta
                </h2>
                <h5>Instrucciones</h5>

                <p> - Los jugadores parten con una cantidad de $10.000 por defecto.</p>

                <p> - En cada ronda los jugadores apuestan entre un 8% y 15% del total de dinero que poseen.
                    Si tienen $1.000 o menos, van All In. Si no les queda dinero, no apuestan.</p>

                <p> - El modo de apuesta es el siguiente, un jugador puede apostar a Verde, Rojo o Negro con
                    un 2%, 49% y 49% de probabilidad respectivamente.</p>

                <p> - Un jugador recupera el doble de lo apostado si acierta su apuesta, cuando ésta sea Rojo o
                    Negro, y recupera 15 veces lo apostado en caso de acertar Verde. En caso de perder la</p>
                apuesta, no recupera nada.

                <p> - La ruleta entrega resultados con la misma probabilidad que los jugadores hacen apuestas,
                    es decir, Verde 2%, Rojo 49% y Negro 49%.</p>

                <p> - Cada recarga de la página es una ronda de juego transcurrida, con la apuesta de cada
                    jugador y el resultado de la ruleta.</p>

                <NavLink
                    className='btn btn-primary'
                    to="/roulette"
                >
                    <i className="fa-solid fa-coins"></i> ir a la ruleta
                </NavLink>
                {/* <Navigate to="/roulette/players" className="btn btn-primary"> */}
            </div >

        </>
    )
}
