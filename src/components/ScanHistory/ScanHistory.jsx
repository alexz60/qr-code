import {SCAN_DATA} from '../../constants'
import s from './scanHistory.module.css'
import {QRCodeSVG} from 'qrcode.react'

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

    return (
        <div className={s.container}>
            <h3 className={s.header} >История сканирования</h3>
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