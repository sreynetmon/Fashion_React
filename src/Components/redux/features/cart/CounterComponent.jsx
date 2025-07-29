
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlide'

export default function CounterComponent() {
//   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
 console.log(dispatch)
  return (
    <div >
      <div className='flex gap-5'>
        <button
          aria-label="Increment value"
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}