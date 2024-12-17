import { Scanner } from "@yudiel/react-qr-scanner"
import { useState } from 'react'
import s from './qrCodeScanner.module.css'
import {SCAN_DATA} from '../../constants'

export const QrCodeScanner = () => {
    const [res, setRes] = useState(null)

    return (
        <div className={s.container}>
            <Scanner
                components={{audio: false, finder: false}}
                styles={{container: {width: 200, height: 200}}}
                onScan={(result) => {
                    setRes(result[0].rawValue)

                    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
                    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, {dtKey: (new Date()).getTime(), text: result[0].rawValue}]))
                }}
            />
            <p className={s.result}>{res}</p>
        </div>
    )
}