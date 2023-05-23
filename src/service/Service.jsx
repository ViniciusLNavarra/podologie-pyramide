import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../navbar'
import Footer from '../footer'
import '../style/tailwind.css'

const title = [
  'text-4xl', 'font-bold', 'mt-6', 'lg:text-7x1',
  'lg:p-10',  'font-oswald'
].join(' ')

const subtitle = [
  'text-2xl', 'font-bold', 'mt-3', 'lg:text-7x1',
  'lg:p-10',  'font-oswald'
].join(' ')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div class="bg-[url('../img/Service.jpg')] bg-cover bg-center h-[70vh]">
      <div
        class={[
          // darken image and add text 
          'bg-black/50', 'flex', 'h-full', 'pt-[55vh]',
          'pl-[5vw]'
        ].join(' ')}>
      </div>
    </div>
    <div class="w-[65vw] m-auto mt-[3vh]">
      <h2 class={title}>Podologische Fuss-Komplexbehandlungen</h2>
      <h3 class={subtitle}>Fussschmerzen</h3>
      <h3 class={subtitle}>Fussfehlstellungen</h3>
      <h3 class={subtitle}>Zehenfehlstellungen</h3>
      <h3 class={subtitle}>Hautveränderungen</h3>
      <h3 class={subtitle}>Silikonorthesen</h3>
      <p class="font-oswald">
        Die geeignetesten massgefertigten Mittel um Konfliktzonen der Zehen und deren 
        axialen Abweichungen zu vermeiden bzw. zu verbessern.
      </p>
      <h2 class={title}>Dystrophischen Nagelbehandlung</h2>
      <h3 class={subtitle}>Nagelveränderungen</h3>
      <h3 class={subtitle}>Nagelprothese/ Teilnagelprothese</h3>
      <p class="font-oswald">
        Die Nagel- oder Teilnagelprothese dient als Ersatz oder für den Aufbau eines Nagels. 
        Sie schützt das Nagelbett und dient dem nachwachsenden Nagel asl Schiene. Die 
        Nagelprothese wird mit Gel (Antimikotisch) modelliert.
      </p>
      <h2 class={title}>Fusspflege/ Manikür/ Wellness</h2>
      <h3 class={subtitle}>Fusspflege/ Pedikür</h3>
      <p class="font-oswald">
        Ist die präventive, therapeutische und rehabilitative Behandlung am gesunden, von 
        Schädigungen bedrohten oder bereits geschädigten Nagel und Fuss.
      </p>
      <h3 class={subtitle}>Manikur</h3>
      <h3 class={subtitle}>Fussreflexzonenmassagen</h3>
      <p class="font-oswald">
        Unsere Füsse, das Spiegelbild unseres Körpers. Über Nervenimpulse besteht eine 
        direkte Verbindung zu den jeweiligen Organen des Körpers. Bei der 
        Fussreflexzonenmassage wird der gesamte Fuss massiert. Durch wiederholtes Massieren 
        der schmerzhaften Fusszonen werden diese Störungen gelindert oder gar behoben.
      </p>
      <h3 class={subtitle}>Detox Fussmassage</h3>
      <p class="font-oswald">
        Mit Zugabe einer heissen Ölmischung wird der ganze Fusss intensiv massiert. Dabei 
        bringt das Öl in das Gewebe ein und Giftstoffe und Schlacken werden gelöst. Ist die 
        Entgiftung erfolgt kann entspannt werden. Die Detox Massage wird in den nächsten 
        Tagen nach ihrer Ausführung bestenfalls noch spürbar sein.
      </p>
      <h2 class={title}>Orthonexie</h2>
      <h3 class={subtitle}>Einlagen</h3>
      <p class="font-oswald">
        Einlagen sind ein medizinisches, auf Mass gefertigtes Produkt. Sie haben auf 
        mehreren Ebenen eine wichtige Funktion: Sie sollen korrigieren und/oder 
        kompensieren Fussfehlstellung und sie sollen die Lebensqualität verbessern.
      </p>
      <h3 class={subtitle}>Silkonorthesen</h3>
      <p class="font-oswald pb-7">
        Silikonorthesen sind die geeignesten Mittel um Konfliktzonen der Zehen und deren 
        axialen Abweichungen zu vermeiden bzw. zu verbessern.
      </p>
    </div>
    <Footer />
  </React.StrictMode>
)