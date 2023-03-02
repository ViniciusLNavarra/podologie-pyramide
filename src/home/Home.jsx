import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
import Footer from '../footer_components/Footer'
import Header from '../header_components/Header'
import '../styles/tailwind.css'

// Styles
const image = [
  "bg-[url('../assets/Home.jpg')]",
  // Image properties
  'bg-cover',
  'bg-center',
  // Display properties
  'h-[70vh]'
].join(' ')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div class={image}>
      <div class="bg-black/50 flex h-full pt-[55vh] pl-[5vw]">
        <p class="text-white opacity-100 text-3xl font-allura">Ich kümmere mich um die Gesundheit ihrer Füsse!</p>
      </div>
    </div>
    <p class="w-[65vw] m-auto mt-[3vh] font-oswald">
      Ich freue mich Sie als Patient hier in unsere Praxis in Zürich vorzustellen.
      Meinen therapeutische Ziele umfassten die medizinische Behandlung, Pflege und Präventionen rund um den Fuss. 
      Darunter auch Fussmassagen sowie therapeutische und rehabilitative Massnahmen.
      Mit meiner 8 jährigen Erfahrung als Fusspflegerin mit eine moderne und frische Weiterbildung als Medizinische Fusspflegerin in Podologie, kann ich Ihnen die neuesten Techniken sowie auch viel Erfahrung in die Fussbereich offerieren.
      Ich freue mich auf Ihren Anruf, den ich gerne persönlich entgegennehme. 
      Sollten wir verhindert sein, hinterlassen Sie uns bitte eine Nachricht auf dem Band. 
      Wir beantworten Nachrichten am Selben oder darauffolgenden Arbeitstag.
    </p>
    <div class="h-[2vh]" id="aboutme"></div>
    <Content />
    <Footer />
  </React.StrictMode>
)
