
import './App.css'
import CounterView from './features/counter/CounterView'
import PostsView from './features/posts/PostsView'

function App() {

  return (
    <>
      <h1 className='text-4xl font-semibold text-center'>
          Learning Redux Toolkit
      </h1>
      <CounterView/>

      <h1 className='text-4xl font-semibold text-center mt-10'>
          Learning Redux Toolkit Fetching Data
      </h1>
      <PostsView/>

    </>
  )
}

export default App
