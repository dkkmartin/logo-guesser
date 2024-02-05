'use client'

import Image from 'next/image'
import React, { useEffect, useState, useMemo } from 'react'

type logoData = {
  src: string
  name: string
  q1: string
  q2: string
  q3: string
  q4: string
}

export interface LogoBoxProps {
  data: logoData
  handleClick: (value: string, name: string) => void
}

const LogoBox: React.FC<LogoBoxProps> = ({ data, handleClick }) => {
  const [loading, setLoading] = useState(true)

  const values = useMemo(
    () => [data.q1, data.q2, data.q3, data.q4],
    [data.q1, data.q2, data.q3, data.q4]
  )

  useEffect(() => {
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[values[i], values[j]] = [values[j], values[i]]
    }
    setLoading(false)
  }, [setLoading, values])

  return (
    <section>
      {loading ? (
        <div className="h-[424px]"></div>
      ) : (
        <>
          <Image
            className="m-10 h-[200px] w-[200px] object-contain"
            src={data.src}
            width={200}
            height={200}
            alt="Logo"
          />
          <section className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <button
                key={index}
                onClick={() => handleClick(value, data.name)}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              >
                {value}
              </button>
            ))}
          </section>
        </>
      )}
    </section>
  )
}

export default LogoBox
