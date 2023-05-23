import React from 'react'
import ReactDOM from 'react-dom/client'
import '../style/tailwind.css'
import Navbar from '../navbar'
import Footer from '../footer'

const inputStyle = [
  'form-control',       'block',              'w-full',                 'text-gray-700', 
  'bg-white',           'bg-clip-padding',    'text-base',              'font-normal', 
  'transition',         'ease-in-out',        'rounded',                'px-3', 
  'border',             'border-gray-300',    'border-solid',           'm-0', 
  'py-1.5',             'focus:outline-none', 'focus:border-blue-600',  'focus:bg-white', 
  'focus:text-gray-700', 
].join(' ')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div>
      <div class="bg-cover bg-center h-[70vh] bg-[url('../img/Contact.jpg')]"/>
      <div class="w-[65vw] m-auto mt-[3vh] font-oswald">
        Podologie Pyramide
        Elijanè Círqueira Mitglied des Deutsches Podologen-Verbandes
        Sprachen: Deutsch, Italienisch, Portugiesich
        Sihfeldstrasse 80, 8004 Zürich
        info@podologiepyramide.ch
      </div>
      <div 
        class={[
          'block',    'p-6',      'rounded-lg', 'shadow-lg', 
          'bg-white', 'max-w-md'
        ].join(' ')}>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input 
                type="text"                     id="exampleInput123" 
                aria-describedby="emailHelp123" placeholder="First name"
                class={inputStyle}/>
            </div>
            <div className="form-group mb-6">
              <input 
                type="text"                     id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="Last name"
                class={inputStyle}/>
            </div>
          </div>
          <div className="form-group mb-6">
            <input 
              type="email" placeholder="Email address"
              id="exampleInput125"
              className={inputStyle}/>
          </div>
          <div className="form-group mb-6">
            <input 
              type="password" placeholder="Password" 
              id="exampleInput126"
              class={inputStyle}/>
          </div>
          <button 
            type="submit" 
            class={[
              'w-full',             'py-2.5',           'bg-blue-600',        'leading-tight', 
              'text-white',         'font-medium',      'focus:outline-none', 'rounded', 
              'text-xs',            'focus:ring-0',     'focus:bg-blue-700',  'focus:shadow-lg', 
              'hover:bg-blue-700',  'hover:shadow-lg',  'active:bg-blue-800', 'px-6', 
              'active:shadow-lg',   'transition',       'uppercase',          'shadow-md', 
              'duration-150',       'ease-in-out'
            ].join(' ')}>
            Sign up
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </React.StrictMode>
)
