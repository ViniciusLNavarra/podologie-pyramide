import React from 'react';

const navigation = [
  ['Home', '/'],
  ['Über Mich', '/about/'],
  ['Leistungen', '/service/'],
  ['Preise', '/price/'],
  ['Kontakt', '/contact/'],
]

function Navbar() {
  return (
    <nav 
      class={[ 
        // style: stay on top of the page
        'w-full', 'h-[8vh]',      'py-2',   'bg-white', 
        'flex',   'items-center', 'fixed',  'top-0'
      ].join(' ')}>
      <a 
        href='/' 
        class={[ 
          // style: add logo and center it vertically
          'bg-cover', 'bg-center',  "bg-[url('../img/icon_name.png')]", 'ml-6',
          'mr-5',     'h-[7vh]',    'w-[19vh]'
        ].join(' ')}/>
      {navigation.map(([title, url]) => (
        <a 
          href={url} 
          class={[
            // style: blue links with no underline that change color when hovered
            'text-[#1302B1]',       'text-3xl',   'font-semibold',  'sm:text-2xl',
            'hover:text-[#62025A]', 'transition', 'duration-150',   'ease-in-out', 
            'focus:text-gray-400',  'p-2', 'block'
          ].join(' ')}>
          {title}
        </a>
      ))}
    </nav>
  )
}

export default Navbar;