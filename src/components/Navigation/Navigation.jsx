import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/generate" >Генерировать QR код</NavLink>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/scan" >Сканировать QR код</NavLink>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/generateHistory" >История генерирования</NavLink>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/scanHistory" >История сканирования</NavLink>
        </nav>
    )
}