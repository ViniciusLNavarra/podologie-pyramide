import React from 'react'
import { Address, Mail, Phone } from './FooterInfo'

function FooterContent() {
  return (
    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
      <div>
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-end">
            Kontakt - Podologie Pyramide
        </h6>
        <Address />
        <Mail />
        <Phone />
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.8371398452114!2d8.514766715930461!3d47.3760970118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a22f61c929d%3A0x1347bf0763f9e39e!2sSihlfeldstrasse%2080%2C%208004%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1675115148928!5m2!1sen!2sch" 
        class="w-[40vw] h-[30vh]"></iframe>
    </div>
  )
}

export default FooterContent