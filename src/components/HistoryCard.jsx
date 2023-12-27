import { useEffect } from "react";
import { useAuthStore } from "../hooks";
import { useRouletteStore } from "../hooks/useRouletteStore";

export const HistoryCard = () => {

    const { balance, history, startLoadHistory } = useRouletteStore();

    useEffect(() => {
        startLoadHistory();
    }, [])


    return (
        <div className="card" style={{ width: '25rem' }}>
            <div className="card-body" style={{ 'height': '482px', 'overflowY': 'auto' }}>
                <h5 className="card-title">Historial</h5>
                <h6 className="card-subtitle mb-2 text-muted">Saldo Actual: ${balance.toLocaleString()}</h6>
                <ul className="list-group">
                    {
                        history.map(({ gameTime, betValue, amount }, index) => (
                            <li key={`${gameTime}-${betValue}-${amount}-${index}`} className="list-group-item">
                                <span className="badge bg-primary">{gameTime}</span>
                                &nbsp;
                                <span className="badge bg-secondary">
                                    Apostado: {betValue.toLocaleString()}
                                </span>
                                &nbsp;
                                {amount < 0 ? (
                                    <span className="badge bg-danger">
                                        Perdida: {amount.toLocaleString()}
                                    </span>
                                ) : (
                                    <span className="badge bg-success">
                                        Beneficio: {amount.toLocaleString()}
                                    </span>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
