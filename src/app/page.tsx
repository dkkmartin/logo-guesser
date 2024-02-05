'use client'

import Counter from './components/counter'
import LogoBox from './components/logoBox'
import { CounterMethods } from './components/counter'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const logoData = [
    {
      src: '/android.svg',
      name: 'Android',
      q1: 'Android',
      q2: 'Vimeo',
      q3: 'Spotify',
      q4: 'Soundcloud',
    },
    {
      src: '/apple.svg',
      name: 'Apple',
      q1: 'Apple',
      q2: 'Reddit',
      q3: 'Twitter',
      q4: 'LinkedIn',
    },
    {
      src: '/css.svg',
      name: 'CSS',
      q1: 'CSS',
      q2: 'HTML',
      q3: 'Tailwind',
      q4: 'React',
    },
    {
      src: '/html.svg',
      name: 'HTML',
      q1: 'HTML',
      q2: 'CSS',
      q3: 'Tailwind',
      q4: 'React',
    },
    {
      src: '/javascript.svg',
      name: 'JavaScript',
      q1: 'JavaScript',
      q2: 'Python',
      q3: 'React',
      q4: 'MongoDB',
    },
    {
      src: '/jd-sports.svg',
      name: 'JD Sports',
      q1: 'JD Sports',
      q2: 'Jordan',
      q3: 'Starbucks',
      q4: 'Nike',
    },
    {
      src: '/jordan.svg',
      name: 'Jordan',
      q1: 'Jordan',
      q2: 'JD Sports',
      q3: 'Nike',
      q4: 'Starbucks',
    },
    {
      src: '/linkedin.svg',
      name: 'LinkedIn',
      q1: 'LinkedIn',
      q2: 'Twitter',
      q3: 'Reddit',
      q4: 'Vimeo',
    },
    {
      src: '/mongodb.svg',
      name: 'MongoDB',
      q1: 'MongoDB',
      q2: 'PostgreSQL',
      q3: 'Python',
      q4: 'React',
    },
    {
      src: 'postgresql.svg',
      name: 'PostgreSQL',
      q1: 'PostgreSQL',
      q2: 'MongoDB',
      q3: 'Python',
      q4: 'React',
    },
    {
      src: '/python.svg',
      name: 'Python',
      q1: 'Python',
      q2: 'JavaScript',
      q3: 'React',
      q4: 'MongoDB',
    },
    {
      src: '/react.svg',
      name: 'React',
      q1: 'React',
      q2: 'Python',
      q3: 'MongoDB',
      q4: 'JavaScript',
    },
    {
      src: '/reddit.svg',
      name: 'Reddit',
      q1: 'Reddit',
      q2: 'Twitter',
      q3: 'LinkedIn',
      q4: 'Vimeo',
    },
    {
      src: '/skype.svg',
      name: 'Skype',
      q1: 'Skype',
      q2: 'Slack',
      q3: 'Spotify',
      q4: 'Soundcloud',
    },
    {
      src: '/soundcloud.svg',
      name: 'Soundcloud',
      q1: 'Soundcloud',
      q2: 'Spotify',
      q3: 'Starbucks',
      q4: 'Skype',
    },
    {
      src: '/spotify.svg',
      name: 'Spotify',
      q1: 'Spotify',
      q2: 'Soundcloud',
      q3: 'Skype',
      q4: 'Slack',
    },
    {
      src: '/starbucks.svg',
      name: 'Starbucks',
      q1: 'Starbucks',
      q2: 'JD Sports',
      q3: 'Jordan',
      q4: 'Nike',
    },
    {
      src: 'tailwind.svg',
      name: 'Tailwind',
      q1: 'Tailwind',
      q2: 'CSS',
      q3: 'HTML',
      q4: 'React',
    },
    {
      src: 'telegram.svg',
      name: 'Telegram',
      q1: 'Telegram',
      q2: 'Twitter',
      q3: 'Slack',
      q4: 'Skype',
    },
    {
      src: '/tiktok.svg',
      name: 'TikTok',
      q1: 'TikTok',
      q2: 'Twitter',
      q3: 'Slack',
      q4: 'Skype',
    },
    {
      src: '/twitter.svg',
      name: 'Twitter',
      q1: 'Twitter',
      q2: 'LinkedIn',
      q3: 'Reddit',
      q4: 'Vimeo',
    },
    {
      src: '/vimeo.svg',
      name: 'Vimeo',
      q1: 'Vimeo',
      q2: 'Reddit',
      q3: 'Twitter',
      q4: 'LinkedIn',
    },
  ]
  const [key, setkey] = useState(0)
  const [points, setPoints] = useState(0)
  const [gameover, setGameover] = useState(false)
  const counterRef = useRef<CounterMethods>()
  const randomLogo = logoData[Math.floor(Math.random() * logoData.length)]

  const resetCounter = () => {
    counterRef.current?.reset()
  }

  const handleClick = (answer: string, name: string) => {
    setkey((prevKey) => prevKey + 1)
    if (answer === name) {
      setPoints((prevPoints) => prevPoints + 1)
      resetCounter()
    }
  }

  const handleLoss = () => {
    setGameover(true)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counterRef.current?.getCount() === 0) {
        // do something when the counter is 0
        handleLoss()
      }
    }, 1000) // check every second

    // clean up on unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      {gameover ? (
        <>
          <h1 className="text-6xl">Game Over</h1>
          <p className="text-4xl">{points}</p>
        </>
      ) : (
        <>
          <Counter ref={counterRef} />
          <LogoBox key={key} handleClick={handleClick} data={randomLogo} />
          <p className="text-4xl">{points}</p>
        </>
      )}
    </main>
  )
}
