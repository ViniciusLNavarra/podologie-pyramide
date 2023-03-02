import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
import Header from '../header_components/Header'
import Footer from '../footer_components/Footer'
import '../styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div class="bg-cover bg-center h-[70vh] bg-[url('../assets/Service.jpg')]"/>
    <Content />
    <Footer />
  </React.StrictMode>
)
