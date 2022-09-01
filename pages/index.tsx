import { NextPage } from "next"
import { useState, useEffect } from "react"
import Head from "next/head"

const Home : NextPage = () => {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("Septermber 28, 2022 00:00:00").getTime()
      const today = new Date().getTime()

      const timeDiff = endDate - today

      const seconds = 1000
      const minutes = seconds * 60
      const hours = minutes * 60
      const days = hours * 24

      let timeDays: number = Math.floor(timeDiff / days)
      let timeHours : number = Math.floor((timeDiff % days) / hours)
      let timeMinutes : number = Math.floor((timeDiff % hours) / minutes)
      let timeSeconds : number = Math.floor((timeDiff % minutes) / seconds)

      setDays(timeDays)
      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)
      setIsLoading(false)
    }

    setInterval(countdown, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>Days to</title>
        <meta name="description" content="Dias para las vacas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="container">
          <h1>Dias para <a href="" style={{color: "lightgreen"}}>el bolson</a></h1>

          <div className="countdown">
            <article>
              <p>{days}</p>
              <h3>Days</h3>
            </article>
            <article>
              <p>{hours}</p>
              <h3>Hours</h3>
            </article>
            <article>
              <p>{minutes}</p>
              <h3>Minutes</h3>
            </article>
            <article>
              <p>{seconds}</p>
              <h3>Seconds</h3>
            </article>
          </div>
        </section>
      )}
    </>
  )
}

export default Home