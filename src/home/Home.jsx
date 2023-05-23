import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../navbar'
import Cover from './components/Cover'
import Footer from '../footer'
import '/style/tailwind.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Cover />
    <div class="m-auto p-4 sm:p-8 w-[70vw]">
      <p class="mt-[3vh] font-oswald">
        Ich freue mich Sie als Patient hier in unsere Praxis in Zürich vorzustellen.
        Meinen therapeutische Ziele umfassten die medizinische Behandlung, Pflege und 
        Präventionen rund um den Fuss. Darunter auch Fussmassagen sowie 
        therapeutische und rehabilitative Massnahmen. Mit meiner 8 jährigen Erfahrung 
        als Fusspflegerin mit eine moderne und frische Weiterbildung als Medizinische 
        Fusspflegerin in Podologie, kann ich Ihnen die neuesten Techniken sowie auch 
        viel Erfahrung in die Fussbereich offerieren. Ich freue mich auf Ihren 
        Anruf, den ich gerne persönlich entgegennehme. Sollten wir verhindert sein, 
        hinterlassen Sie uns bitte eine Nachricht auf dem Band. Wir beantworten 
        Nachrichten am Selben oder darauffolgenden Arbeitstag.
      </p>
      <p class="text-3xl font-allura text-center mt-[3vh]">
        Ich kümmere mich um die Gesundheit ihrer Füsse!
      </p>
    </div>
    <Footer />
  </React.StrictMode>
)