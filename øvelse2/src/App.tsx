import { NavBar } from './Components/NavBar/NavBar'
import { Header } from './Components/Header/Header'
import { Main } from './Components/MainPage/MainPage'
import { Button } from './Components/Button/Button'
import { Footer } from './Components/Footer/Footer'
import {Greetings} from './Components/Greetings/Greetings'
import {Wrapper} from './Components/Wrapper/Wrapper'

import './App.css'

function App() {
  
  return (
    <>
    <NavBar></NavBar>
    <Header></Header>
    <Main></Main>
    <Greetings></Greetings>
    {/* <Wrapper></Wrapper> */}
    <Button></Button>
    <Footer></Footer>
       
    </>

  )
}

export default App
