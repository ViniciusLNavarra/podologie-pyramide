import React from 'react';

// Styles
const link = [
  // Text properties
  'text-[#1302B1]',
  'text-3xl',
  'sm:text-2xl',
  'font-semibold',
  // Display properties
  'block',
  'p-2',
  // Transition properties
  'hover:text-[#62025A]',
  'focus:text-gray-400',
  'transition',
  'duration-150',
  'ease-in-out'
].join(' ')

const navbar = [
  'py-2',
  'h-[8vh]',
  'bg-white',
  'flex',
  'items-center',
  'w-full',
  'fixed',
  'top-0',
].join(' ')

const navigation = [
  ['Home', '/'],
  ['Über Mich', '/#aboutme'],
  ['Leistungen', '/service/'],
  ['Preise', '/price/'],
  ['Kontakt', '/contact/'],
]

function Header() {
  return (
    <nav className={navbar}>
      <a href='/' class="bg-cover bg-center bg-[url('../assets/icon_name.png')] ml-6 mr-5 h-[7vh] w-[19vh]"></a>
      {navigation.map(([title, url]) => (
        <a href={url} className={link}>{title}</a>
      ))}
    </nav>
  )
}

export default Header;