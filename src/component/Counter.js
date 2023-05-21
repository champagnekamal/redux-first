import React from 'react'
import { decrement, increment } from './slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button type='button'
          aria-label="Increment value"
          onClick={() => dispatch(increment())} disabled
        >
          Increment
        </button>
        <span>{count}</span>
        <button type='button'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
         disabled={count ===0}>
          Decrement
        </button>
      </div>
    </div>
  )
}
