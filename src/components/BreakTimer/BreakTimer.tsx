import React, { FC } from 'react'

interface BreakProps {
    breakerLenght: number,
    incrementBreakerLenght(): any
    decrementBreakLenght(): any
}

const BreakTimer: FC<BreakProps> = ({ breakerLenght, incrementBreakerLenght, decrementBreakLenght }) => {

    return (
        <div>
            <div className="flex flex-col">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl mb-3">Duração do Intervalo</h2>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mx-6">
                        <button type="button" className="rounded-lg w-32 py-1 text-4xl font-semibold bg-blue-600 hover:bg-blue-400" onClick={decrementBreakLenght}>-</button>
                    </div>
                    <div className="text-center">
                        <p className="w-10">{breakerLenght}s</p>
                    </div>
                    <div className="mx-6">
                        <button type="button" className="rounded-lg w-32 py-1 text-4xl font-semibold bg-blue-600 hover:bg-blue-400" onClick={incrementBreakerLenght}>+</button>
                    </div>
                </div>
                </div>
        </div>
    )
}


export default BreakTimer