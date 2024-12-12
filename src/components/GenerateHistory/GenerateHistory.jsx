import { GENERATE_DATA } from "../../constants"
import s from './generateHistory.module.css'
import {QRCodeSVG} from 'qrcode.react'

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    return (
        <div className={s.container}>
            <h3 className={s.header} >История генерирования</h3>
            {data.map((text) =>
                <>
                    <p className={s.item} key={text}>
                        {text}
                        <QRCodeSVG className={s.item} size='36' value={text} />
                    </p>
                </>
            )}
        </div>
    )
}