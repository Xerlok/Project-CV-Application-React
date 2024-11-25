import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Main from './components/content'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='body-wrapper'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>   
  </StrictMode>,
)
