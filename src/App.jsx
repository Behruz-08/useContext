

import './App.css'
import { CardProvider } from './components/card/CardProvider'
import Cards from './components/card/Cards'

function App() {


  return (
    <CardProvider>
      <Cards/>
    </CardProvider>
  )
}

export default App
