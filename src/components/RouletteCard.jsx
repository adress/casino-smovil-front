import { useState } from "react";
import { useRouletteStore } from "../hooks/useRouletteStore";

export const RouletteCard = () => {

    const [color, setcolor] = useState('');
    const { startRoulette } = useRouletteStore();

    const colorSelected = (color) => {
        setcolor(color);
    }

    const onPlay = () => {
        startRoulette(color);
    };

    return (
        <div className="card mx-4" style={{ width: '20rem' }}>
            <img className="card-img-top mb-3 rounded" src="https://i.pinimg.com/originals/f1/69/37/f16937aee1202bcba272a69845d55c99.gif" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title text-center">Color seleccionado: <br /> {color ? color : 'Desconocido'}</h5>
                <div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <button className="btn btn-outline-primary"
                                onClick={() => colorSelected('verde')}
                            >
                                Verde
                            </button>
                            <button className="btn btn-outline-primary mx-2"
                                onClick={() => colorSelected('rojo')}
                            >
                                Rojo
                            </button>
                            <button className="btn btn-outline-primary"
                                onClick={() => colorSelected('negro')}
                            >
                                Negro
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-secondary"
                        disabled={!color || color.length <= 0}
                        onClick={onPlay}
                    >
                        Realizar lanzamiento
                    </button>
                </div>
            </div>
        </div>
    )
}
