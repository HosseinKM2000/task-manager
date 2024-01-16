import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from './features/tasks/action'
import  Tasks  from './components/Tasks/Tasks'
import Loader from './components/loader/loader'

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.tasks.isLoading);
  useEffect(()=>{
    dispatch(getTasks())
  },[])

  return (
    <div className='app'>
      {
      isLoading
        ?<Loader/>
        :<Tasks/>
      }
    </div>
  )
}

export default App
