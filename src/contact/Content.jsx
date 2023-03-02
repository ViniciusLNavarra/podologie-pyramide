import React from 'react'
import Form from './Form'

function Content() {
  return (
    <div>
      <div class="bg-cover bg-center h-[70vh] bg-[url('../assets/Contact.jpg')]"/>
      <div class="w-[65vw] m-auto mt-[3vh] font-oswald">
        Podologie Pyramide
        Elijanè Círqueira Mitglied des Deutsches Podologen-Verbandes
        Sprachen: Deutsch, Italienisch, Portugiesich
        Sihfeldstrasse 80, 8004 Zürich
        info@podologiepyramide.ch
      </div>
      <Form />
    </div>
  )
}

export default Content