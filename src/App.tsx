import React, { FC, useEffect, useRef, useState } from 'react';
import BreakTimer from './components/BreakTimer/BreakTimer';
import SessionTimer from './components/SessionTimer/SessionTimer';
import TimeLeft from './components/TimeLeft/TimeLeft';

const App: FC = () => {
  
  const [sessionLenght, setSessionLenght] = useState<number>(25)
  const [breakerLenght, setBreakerLenght] = useState<number>(5)

  const [currentSessionType, setCurrentSessionType ] = useState<any>('Actividade')
  const [intervalId, setIntervalId] = useState<any>(null)
  const [timerLeft, setTimerLeft] = useState<number>(sessionLenght)

  const audioRef = useRef<HTMLAudioElement>(null)

  // Actualiza o temporizador quando alteramos o tempo da actividade
  useEffect(() => {
      setTimerLeft(sessionLenght)
  }, [sessionLenght])

  // Troca entre a Actividade e Intervalo quando o tempo chega no 00:00
  useEffect(() => {
    if(timerLeft === 0){
      audioRef.current?.play()
      if(currentSessionType === 'Actividade'){
        setCurrentSessionType('Intervalo')
        setTimerLeft(breakerLenght)
      } else if (currentSessionType === 'Intervalo'){
        setCurrentSessionType('Actividade')
        setTimerLeft(sessionLenght)
      }
    }
  }, [timerLeft, currentSessionType, breakerLenght, sessionLenght])

  // Sessions Functions
  // Adiciona +25s de Actividade
  function incrementSessionLenght(){
    setSessionLenght(sessionLenght + 25)
  }

    // Diminui -25s de Actividade
  function decrementSessionLenght(){
      const newSessionTimer = sessionLenght - 25
      if(newSessionTimer > 0){
        setSessionLenght(newSessionTimer)
      }else{
        setSessionLenght(0);
      }
  }

  // Breaker Functions
  // Adiciona +5s de Intervalo
  function incrementBreakerLenght(){
      setBreakerLenght(breakerLenght + 5)
  }

    // Diminui +5s de Intervalo
  function decrementBreakLenght(){
      const newBreakerLenght = breakerLenght - 5
      if(newBreakerLenght > 0){
          setBreakerLenght(newBreakerLenght)
      }else{
          setBreakerLenght(0);
      }
  }

  
  const isStarted = intervalId !== null // Verifica se o temporizador já iniciou

  // Evento do Botão Start/Stop
  const handleStartStopTimer = () => {
      if(isStarted){
          clearInterval(intervalId)
          setIntervalId(null)
      } else {
          const newIntervalId = setInterval(() => {
              setTimerLeft((prevTimer: number) : any => prevTimer - 1)
          }, 1000)
          setIntervalId(newIntervalId)
      }

  }

  // Evento do Botão Reset
  function handleResetTimerbutton() {
    audioRef.current?.load()
    clearInterval(intervalId)
    setIntervalId(null)
    setCurrentSessionType('Actividade')
    setSessionLenght(25)
    setBreakerLenght(5)
    setTimerLeft(25)
  }
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <BreakTimer 
        breakerLenght={breakerLenght}
        incrementBreakerLenght={incrementBreakerLenght}
        decrementBreakLenght={decrementBreakLenght}
      />
      <TimeLeft 
        timerLeft={timerLeft}
        timerLabel={currentSessionType}
        handleStartStopTimer={handleStartStopTimer}
        handleResetTimerbutton={handleResetTimerbutton}
        startStopButtonLabel={isStarted ? 'Pausar' : 'Iniciar'}

        />
      <SessionTimer
        sessionLenght={sessionLenght}
        incrementSessionLenght={incrementSessionLenght}
        decrementSessionLenght={decrementSessionLenght}
      />
      <audio ref={audioRef}>
        <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
      </audio>
        
    </div>
  );
}

export default App;
