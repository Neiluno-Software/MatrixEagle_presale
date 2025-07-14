import { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";

export default function Timer({ timeToEnd } : { timeToEnd:any }) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const { t } = useTranslation();

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
            <div className="w-full text-white flex flex-col items-center justify-center">
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">{days < 10 ? 0 : Math.floor(days / 10)}{days % 10}</p>
                <p className="font-normal sm:font-bold text-[13px] md:text-base leading-[16px] tracking-tight md:tracking-wide">
                  {t("Purchase.days")}
                </p>
            </div>
            <div className="w-full text-white flex flex-col items-center justify-center">
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">{hours < 10 ? 0 : Math.floor(hours / 10)}{hours % 10}</p>
                <p className="font-normal sm:font-bold text-[13px] md:text-base leading-[16px] tracking-tight md:tracking-wide">
                  {t("Purchase.hours")}
                </p>
            </div>
            <div className="w-full text-white flex flex-col items-center justify-center">
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">{minutes < 10 ? 0 : Math.floor(minutes / 10)}{minutes % 10}</p>
                <p className="font-normal sm:font-bold text-[13px] md:text-base leading-[16px] tracking-tight md:tracking-wide">
                  {t("Purchase.minutes")}
                </p>
            </div>
            <div className="w-full text-white flex flex-col items-center justify-center">
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">{seconds < 10 ? 0 : Math.floor(seconds / 10)}{seconds % 10}</p>
                <p className="font-normal sm:font-bold text-[13px] md:text-base leading-[16px] tracking-tight md:tracking-wide">
                  {t("Purchase.seconds")}
                </p>
            </div>
        </div>
    )
}
