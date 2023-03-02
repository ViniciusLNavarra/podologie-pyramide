import React from 'react'
import AboutMe from './AboutMe'

// Styles
const content = [
  "m-auto",
  'w-[70vw]',
  'bg-white',
  'p-4',
  'sm:p-8',
  'grid',
  'grid-cols-6',
  'lg:grid-cols-5',
  'gap-4'
].join(' ')

function Content() {
  return (
    <div class={content}>
      <AboutMe />
      <img class="col-span-2 lg:col-span-1" src='./assets/Navarra.jpg'/>
    </div>
  )
}

export default Content