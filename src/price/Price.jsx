import React from 'react'
import ReactDOM from 'react-dom/client'
import '../style/tailwind.css'
import Navbar from '../navbar'
import Footer from '../footer'

const prices = [
  ['Podologisch Fuss-Komplexbehandlung', '45 - 60 Minuten', '125 CHF'],
  ['Dystrophischen Nägel Behandlung', '45 - 60 Minuten', '125 CHF'],
  ['Fusspfleger / Pedikür', 'ca 30 Minuten', '85 CHF'],
  ['Orthonexie ', 'ca. 1 Woche', 'ab 40 CHF'],
  ['Fuss und Unterschenkelmassage', '35 Minuten', 'ab 60 CHF'],
  ['Hausbesuch', 'Nach Vereinbarung', <p>Nach Preisempfehlungen des <a href='https://podologie.swiss'>SPV</a></p>]
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div
      class={[
          'bg-cover', 'bg-center', "bg-[url('../img/Price.jpg')]", 'pt-[12vh]',
          'grid', 'grid-cols-2', 'lg:grid-cols-3', 'grid-rows-4', 'px-[17.5vw]', 
          'gap-6', 'pb-[12vh]'
        ].join(' ')}>
      <p 
        class={[
          'font-oswald', 'col-span-2', 'lg:col-span-3', 'flex', 'items-center', 
          'justify-center', 'w-[75%]', 'm-auto'
        ].join(' ')}>
        Ich freue mich Sie als Patient hier in unsere Praxis in Zürich vorzustellen.
        Meinen therapeutische Ziele umfassten die medizinische Behandlung, Pflege 
        und Präventionen rund um den Fuss. Darunter auch Fussmassagen sowie 
        therapeutische und rehabilitative Massnahmen. Mit meiner 8 jährigen 
        Erfahrung als Fusspflegerin mit eine moderne und frische Weiterbildung als 
        Medizinische Fusspflegerin in Podologie, kann ich Ihnen die neuesten 
        Techniken sowie auch viel Erfahrung in die Fussbereich offerieren. Ich 
        freue mich auf Ihren Anruf, den ich gerne persönlich entgegennehme. 
        Sollten wir verhindert sein, hinterlassen Sie uns bitte eine Nachricht 
        auf dem Band. Wir beantworten Nachrichten am Selben oder darauffolgenden 
        Arbeitstag.
      </p>
      {prices.map(([title, price, time]) => (
        <div class="bg-white/90 flex flex-col items-center justify-center w-[30vh] h-[30vh] lg:w-[15vw] lg:h-[15vw]">
          <h3 class="font-oswald">{title}</h3>
          <p class="font-oswald">{price}</p>
          <p class="font-oswald">{time}</p>
        </div>
      ))}
    </div>
    <Footer />
  </React.StrictMode>
)
