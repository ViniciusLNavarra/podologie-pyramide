import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
import '../styles/tailwind.css'
import Header from '../header_components/Header'
import Footer from '../footer_components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>
)
