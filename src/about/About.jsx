import React from 'react'
import ReactDOM from 'react-dom/client'
import '../style/tailwind.css'
import Navbar from '../navbar'
import Footer from '../footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div 
      class={[
        "bg-[url('../img/Home.jpg')]", 'bg-cover', 'bg-center', 'h-[70vh]'
      ].join(' ')}>
      <div class={[
        'bg-black/50', 'flex', 'h-full', 'pt-[55vh]', 
        'pl-[5vw]'
      ].join(' ')}>
        <p class="text-white opacity-100 text-3xl font-allura">
          Ich kümmere mich um die Gesundheit ihrer Füsse!
        </p>
      </div>
    </div>
    <div class={[
      "m-auto", 'w-[70vw]', 'bg-white',     'p-4',
      'sm:p-8', 'grid',     'grid-cols-6',  'lg:grid-cols-5',
      'gap-4'
    ].join(' ')}>
      <div class="col-span-4">
        <h1 class={[
          'text-5xl', 'font-bold',  'pt-3', 'lg:text-7x1',
          'lg:p-10',  'font-oswald'
        ].join(' ')}>
          Über Mich
        </h1>
        <p class="font-oswald">
          Als podologische, medizinische Fusspflegerin in Zürich gilt mein Augenmerk 
          der Gesundheit und Wohlbefinden Ihrer Füsse. Grundlage für meine Arbeit 
          bildet neben einer einschlägigen Ausbildung ein fundiertes Wissen in den 
          Bereichen Dermatologie, Diabetikologie, Hygene, Orthopädie und Anatomie. 
          Die Arbeit mit dem Patienten bietet ständig neue Herausforderungen, denen 
          ich mich gerne Stelle. Durch diverse Fortbildungen habe ich beste 
          qualifizierungen.
        </p>
        <br/>
        <p class="font-oswald">
          Egal aus welchem Grund Sie sich behandeln lassen, Ihr Wohl liegt uns am 
          Herzen.
        </p>
      </div>
      <img class="col-span-2 lg:col-span-1" src='../img/Navarra.jpg'/>
      <ul class="font-oswald col-span-6">
        <li>1998 Nageldesignerin</li>
        <li>2016 Pflegerin</li>
        <li>2019 Podologie BFZ in Deutschland</li>
        <li>2022 Fusspflegerin</li>
        <li>2022 Podologin BFZ in der Schweiz</li>
      </ul>
    </div>
    <Footer />
  </React.StrictMode>
)

export default About