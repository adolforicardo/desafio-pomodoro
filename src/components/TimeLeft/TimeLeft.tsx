import moment from 'moment'
import React, { FC } from 'react'


interface ITimeLeftProps {
    timerLeft: any,
    timerLabel: string,
    handleStartStopTimer(): void,
    handleResetTimerbutton(): void,
    startStopButtonLabel: string
}


const TimeLeft: FC<ITimeLeftProps> = ({ timerLeft, timerLabel, handleStartStopTimer, handleResetTimerbutton, startStopButtonLabel }) => {
    
    // Formatação de Segundos para MM:SS
    const formattedTimerLeft = moment().startOf('day').seconds(+timerLeft).format('mm:ss')

    return (
        <div className="text-center my-10">
            <p className="text-2xl">{timerLabel}</p>
            <div className="flex justify-center items-center relative left-1/4 w-36 h-36 rounded-full border">
                <p className="text-2xl">{formattedTimerLeft}</p>
            </div>
            <div className="flex">
                <div className="mr-5">
                    <button type='button' className="rounded-lg w-32 py-1 text-3xl font-semibold text-black bg-green-400 hover:bg-green-300 mt-2" onClick={handleStartStopTimer}>{startStopButtonLabel}</button>
                </div>
                <div>
                    <button type='button' className="rounded-lg w-32 py-1 text-3xl font-semibold text-black bg-red-400 hover:bg-red-300 mt-2" onClick={handleResetTimerbutton}>Resetar</button>
                </div>

            </div>
        </div>
    )
}


export default TimeLeft;