import { NavLink } from "react-router-dom";
import { useAuthStore } from "../hooks";



export const Navbar = () => {

  const { startLogout, user } = useAuthStore();

  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fa-regular fa-user"></i>
        &nbsp;
        {user.name}
      </span>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/"
          >
            Instrucciones
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/roulette"
          >
            Ruleta
          </NavLink>

          {
            (user.isAdmin) && (
              <NavLink
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/admin"
              >
                Admin
              </NavLink>
            )
          }

        </div>
      </div>


      <button
        className="btn btn-outline-danger"
        onClick={startLogout}
      >
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
