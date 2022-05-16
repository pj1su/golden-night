import React , {Suspense}from 'react'
import {Routes , Route} from 'react-router-dom'
import './App.scss'

const MainPage = React.lazy(()=> import('./page/MainPage'))
const WalletPage = React.lazy(()=>import('./page/WalletPage'))

function App() {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path='/wallet' element={<WalletPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
