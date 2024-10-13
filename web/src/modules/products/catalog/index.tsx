import { createSignal } from 'solid-js'

function ProductsCatalog() {
  const [count, setCount] = createSignal(0)

  return (
    <>
        <button class=' bg-green-400 ' type="button" onClick={() => setCount((count) => count + 1)}>
          Catalog is {count()}
        </button>
    </>
  )
}

export default ProductsCatalog
