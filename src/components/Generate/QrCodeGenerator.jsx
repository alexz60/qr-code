import {QRCodeSVG} from 'qrcode.react'
import { useState } from 'react'
import s from './qrCodeGenerator.module.css'
import {GENERATE_DATA} from '../../constants'
import { UseDeviceDetect } from '../UseDeviceDetect/UseDeviceDetect'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('hello')
    const [showQR, setShowQR] = useState('')
    const isMobile = UseDeviceDetect()

    return (
        <div className={s.container}>
            <div>{isMobile ? 'true' : 'false'}</div>
            <input
                className={s.input}
                type='text'
                placeholder='Введите текст...'
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                    setShowQR('')
                }}
            />
            <button className={s.button} type='button' onClick={() => {
                const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
                localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, {dtKey: (new Date()).getTime(), text: value}]))
                setShowQR(value)
                setValue('')
            }} >Сгенерировать QR</button>

            {showQR !== '' && <QRCodeSVG className={s.qrWrapper} value={showQR} size='200' />}
        </div>
    )
}