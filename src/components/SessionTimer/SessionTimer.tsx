import React, { FC } from 'react'

interface SessionProps {
    sessionLenght: number,
    incrementSessionLenght(): any
    decrementSessionLenght(): any
}

 const SessionTimer: FC<SessionProps> = ({ sessionLenght, incrementSessionLenght, decrementSessionLenght }) => {

    return (
        <div>
            <div className="flex flex-col">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl mb-3">Duração da Actividade</h2>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mx-6">
                        <button type="button" className="rounded-lg w-32 py-1 text-4xl font-semibold bg-blue-600 hover:bg-blue-400" onClick={decrementSessionLenght}>-</button>
                    </div>
                    <div className="text-center">
                        <p className="w-10">{sessionLenght}s</p>
                    </div>
                    <div className="mx-6">
                        <button type="button" className="rounded-lg w-32 py-1 text-4xl font-semibold bg-blue-600 hover:bg-blue-400" onClick={incrementSessionLenght}>+</button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default SessionTimer