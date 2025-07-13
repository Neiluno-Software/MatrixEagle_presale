import { useState, useEffect } from 'react'

export default function Timer({ timeToEnd } : { timeToEnd:any }) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const getTimeUntil = () => {
            const deadline = timeToEnd ? parseInt(timeToEnd) * 1000 : 0
            const time = deadline - Date.now()
            if (time < 0) {
                setDays(0)
                setHours(0)
                setMinutes(0)
                setSeconds(0)
            } else {
                const seconds = Math.floor((time / 1000) % 60)
                const minutes = Math.floor((time / 1000 / 60) % 60)
                const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
                const days = Math.floor(time / (1000 * 60 * 60 * 24))
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }
        const timer = setInterval(getTimeUntil, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [timeToEnd])

    return (
        <div className="grid grid-cols-4 gap-4 py-6">
            <div className="rounded-[15px] w-full py-2 bg-[#00D962] text-white flex flex-col items-center justify-center">
                <p className="text-[#00000080] font-bold text-[13px] md:text-base leading-[16px] md:tracking-wide">
                    DAYS
                </p>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-[#01273E] ">{days < 10 ? 0 : Math.floor(days / 10)}{days % 10}</p>
            </div>
            <div className="rounded-[15px] w-full py-2 bg-[#00D962] text-white flex flex-col items-center justify-center">
                <p className="text-[#00000080] font-bold text-[13px] md:text-base leading-[16px] md:tracking-wide">
                    HOURS
                </p>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-[#01273E] ">{hours < 10 ? 0 : Math.floor(hours / 10)}{hours % 10}</p>
            </div>
            <div className="rounded-[15px] w-full py-2 bg-[#00D962] text-white flex flex-col items-center justify-center">
                <p className="text-[#00000080] font-bold text-[13px] md:text-base leading-[16px] md:tracking-wide">
                    MINUTES
                </p>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-[#01273E] ">{minutes < 10 ? 0 : Math.floor(minutes / 10)}{minutes % 10}</p>
            </div>
            <div className="rounded-[15px] w-full py-2 bg-[#00D962] text-white flex flex-col items-center justify-center">
                <p className="text-[#00000080] font-bold text-[13px] md:text-base leading-[16px] md:tracking-wide">
                    SECONDS
                </p>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-[#01273E] ">{seconds < 10 ? 0 : Math.floor(seconds / 10)}{seconds % 10}</p>
            </div>
        </div>
    )
}
