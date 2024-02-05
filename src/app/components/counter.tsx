import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Ref,
} from 'react'

export interface CounterMethods {
  reset: () => void
  getCount: () => number
}

const Counter = forwardRef<CounterMethods>((props, ref) => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    // exit early when we reach 0
    if (!count) return

    // decrement count every second
    const id = setInterval(() => {
      setCount((currentCount) => currentCount - 1)
    }, 1000)

    // clear interval on component unmount
    return () => clearInterval(id)
  }, [count])

  useImperativeHandle(ref, () => ({
    reset() {
      setCount(3)
    },
    getCount() {
      return count
    },
  }))

  return <h1 className="text-8xl absolute top-4">{count}</h1>
})

Counter.displayName = 'Counter' // Add display name to the component

export default Counter
