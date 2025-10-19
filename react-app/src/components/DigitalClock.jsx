import { useState, useEffect } from 'react'

function DigitalClock() {
  const [time, setTime] = useState(new Date())
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let interval
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime(new Date())
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2>Digital Clock</h2>
        <div className="card text-center">
          <div className="card-body">
            <h1 className="display-3 text-primary">{formatTime(time)}</h1>
            <h4 className="text-muted">{formatDate(time)}</h4>
            <div className="mt-3">
              <button 
                className={`btn ${isRunning ? 'btn-warning' : 'btn-success'}`}
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button 
                className="btn btn-secondary ms-2"
                onClick={() => setTime(new Date())}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalClock