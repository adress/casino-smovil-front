import { Navigate, Route, Routes } from "react-router-dom"
import { RouletteHomePage, RoulettePage } from "../pages"
import { AdminPage } from "../pages/AdminPage"


export const RouletteRoutes = ({ isAdmin }) => {
  return (
    <Routes>
      <Route path="/" element={<RouletteHomePage />} />
      <Route path="/roulette" element={<RoulettePage />} />
      {
        (isAdmin) && (
          <Route path="/admin" element={<AdminPage />} />
        )
      }

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
