import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useAuthStore, useForm, useUserStore } from "../../hooks";

const formFields = {
    name: '',
    email: '',
    password: ''
}
export const AdminPage = () => {

    const { name, email, password, onInputChange, onResetForm } = useForm(formFields);
    const { users, startRegister, startListUsers, startUpdateBalance } = useUserStore();

    const registerSubmit = (event) => {
        event.preventDefault();
        startRegister({ name, email, password });
        onResetForm();
    }

    useEffect(() => {
        startListUsers()
    }, [])



    return (
        <>
            <Navbar />

            <div className="container">
                <form onSubmit={registerSubmit}>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter username"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary"><i className="fa-solid fa-user-plus"></i> Agregar</button>
                </form>

                <hr />

                <div className="row">

                    {/* mostar los usuarios en una lista {name, email, balance} */}
                    {
                        users?.map(({ id, name, email, balance }) => (

                            <div key={id} className="col-3 mt-2" >
                                <div key={id} className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <i className="fa-solid fa-user"></i> {name}
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                                        <p className="card-text">${balance.toLocaleString()}</p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => startUpdateBalance(id, 1000)}
                                        >
                                            Agregar $1,000
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
