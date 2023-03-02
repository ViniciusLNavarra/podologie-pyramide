import React from 'react'

const title = [
  'text-5xl',
  'font-bold',
  'pt-3',
  'lg:text-7x1',
  'lg:p-10',
  'font-oswald'
].join(' ')

function AboutMe() {
  return (
    <div class="col-span-4">
      <h1 class={title}>Über Mich</h1>
      <p class="font-oswald">
        Als Podologische Fusspflegerin in Zürich gilt mein Augenmerk der Gesundheit
        und Wohlbefinden Ihrer Füsse. Grundlage für meine Arbeit bildet neben einer
        einschlägigen Ausbildung ein fundiertes Wissen in den Bereichen Dermatologie,
        Hygene, Orthopädie und Anatomie. Die Arbeit mit dem Patienten bietet ständig
        neue Herausforderungen, denen ich mich gerne Stelle. Durch diverse 
        Fortbildungen habe ich beste qualifizierungen.
      </p>
      <p class="font-oswald">
        Egal aus welchem Grund Sie sich behandeln lassen, Ihr Wohl liegt uns am Herzen.
      </p>
    </div>
  )
}

export default AboutMe