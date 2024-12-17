import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'
import { UseDeviceDetect } from "../UseDeviceDetect/UseDeviceDetect"

export const Navigation = () => {
    return (
        <nav className={UseDeviceDetect() ? [s.container, s.mobile].join(' ') : s.container}>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/generate" >Генерировать QR код</NavLink>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/scan" >Сканировать QR код</NavLink>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/generateHistory" >История генерирования</NavLink>
            <NavLink className={(navData) => navData.isActive ? [s.item, s.active].join(' ') : s.item} to="/scanHistory" >История сканирования</NavLink>
        </nav>
    )
}