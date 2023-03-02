import React from 'react'

const prices = [
  ['Podologisch Fuss-Komplexbehandlung', '45 - 60 Minuten', '125 CHF'],
  ['Dystrophischen Nägel Behandlung', '45 - 60 Minuten', '125 CHF'],
  ['Fusspfleger / Pedikür', 'ca 30 Minuten', '85 CHF'],
  ['Orthonexie ', 'ca. 1 Woche', 'ab 40 CHF'],
  ['Fuss und Unterschenkelmassage', '35 Minuten', 'ab 60 CHF'],
  ['Hausbesuch', 'Nach Vereinbarung', <p>Nach Preisempfehlungen des <a href='https://podologie.swiss'>SPV</a></p>]
]

function Content() {
  return (
    <div>
      <div class=""/>
      <div className="bg-cover bg-center h-[70vh] bg-[url('../assets/Price.jpg')] grid grid-cols-2 grid-rows-4 px-[17.5vw] gap-6 pt-[12vh]">
        <p class="font-oswald col-span-2 flex items-center justify-center w-[75%] m-auto">
          Ich freue mich Sie als Patient hier in unsere Praxis in Zürich vorzustellen.
          Meinen therapeutische Ziele umfassten die medizinische Behandlung, Pflege und Präventionen rund um den Fuss. 
          Darunter auch Fussmassagen sowie therapeutische und rehabilitative Massnahmen.
          Mit meiner 8 jährigen Erfahrung als Fusspflegerin mit eine moderne und frische Weiterbildung als Medizinische Fusspflegerin in Podologie, kann ich Ihnen die neuesten Techniken sowie auch viel Erfahrung in die Fussbereich offerieren.
          Ich freue mich auf Ihren Anruf, den ich gerne persönlich entgegennehme. 
          Sollten wir verhindert sein, hinterlassen Sie uns bitte eine Nachricht auf dem Band. 
          Wir beantworten Nachrichten am Selben oder darauffolgenden Arbeitstag.
        </p>
        {prices.map(([title, price, time]) => (
          <div>
            <h3 class="font-oswald">{title}</h3>
            <p class="font-oswald">{price}</p>
            <p class="font-oswald">{time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content