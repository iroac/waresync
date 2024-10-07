import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class='flex flex-row justify-center items-center w-full ' >
        <button class=' bg-green-400 ' type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
    </div>
  )
}

export default App
