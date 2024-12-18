import { useEffect, useState } from "react"

export const UseDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 750)

    useEffect(() => { 
        const handleResize = () => setIsMobile(window.innerWidth < 750)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(isMobile)
}
