import { useEffect, useState } from "react"

export const UseDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth)

    useEffect(() => { 
        const handleResize = () => setIsMobile(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(isMobile)
}
