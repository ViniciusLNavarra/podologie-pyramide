import React from 'react'
import FooterContent from './FooterContent'

function Footer() {
  return (
    <footer class="text-center bg-gray-100 text-gray-600">
      <div class="py-10">
        <FooterContent />
      </div>
      <div class="text-center p-6 bg-gray-200">
        <span>© 2021 Copyright: </span>
        <a class="text-gray-600 font-semibold" href="https://pyramide-podologie.ch/">Podologie Pyramide</a>
      </div>
    </footer>
  )
}

export default Footer