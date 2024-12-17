import "../../constants.js"
import s from './history.module.css'
import {QRCodeSVG} from 'qrcode.react'

export const History = ({key_data}) => {
    const data = JSON.parse(localStorage.getItem(key_data) || '[]')
    
    return (
        <div className={s.container}>
            <div className={s.scroll_list}>
                {data.map((record) =>
                        <p className={s.item} key={record.dtKey}>
                            {record.text}
                            <QRCodeSVG className={s.item} size='36' value={record.text} />
                        </p>
                )}
            </div>
        </div>
    )
}