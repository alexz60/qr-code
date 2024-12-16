import "../../constants.js"
import s from './history.module.css'
import {QRCodeSVG} from 'qrcode.react'

export const History = ({key_data}) => {
    const data = JSON.parse(localStorage.getItem(key_data) || '[]')
    return (
        <div className={s.container}>
            <div className={s.scroll_list}>
                {data.map((text) =>
                        <p className={s.item} key={text}>
                            {text}
                            <QRCodeSVG className={s.item} size='36' value={text} />
                        </p>
                )}
            </div>
        </div>
    )
}