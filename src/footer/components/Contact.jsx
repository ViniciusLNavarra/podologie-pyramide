import React from 'react'

function Contact() {
  return (
    <div>
      <h6
        class={[
          // Style: Title for Content 
          'uppercase',      'font-semibold', 'mb-4', 'flex', 
          'justify-center', 'md:justify-end'
        ].join(' ')}>
        Kontakt - Podologie Pyramide
      </h6>
      <p class={[
        // Style: Orient to left side
        'flex', 'items-center', 'justify-center', 'md:justify-end', 
        'mb-4'
      ].join(' ')}>
        Sihlfeldstrasse 80, 8004 Zürich
        <svg 
          aria-hidden="true"                  focusable="false" 
          data-prefix="fas"                   data-icon="home"
          class="w-4 ml-4"                    role="img" 
          xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512">
          <path 
            fill="currentColor"
            d=" M280.37 148.26L96 300.11V464a16 16 
                0 0 0 16 
                16l112.06-.29a16 16 0 0 
                0 15.92-16V368a16 16 0 
                0 1 16-16h64a16 16 
                0 0 1 16 
                16v95.64a16 16 0 0 
                0 16 16.05L464 480a16 
                16 0 0 0 
                16-16V300L295.67 148.26a12.19 12.19 0 
                0 0-15.3 0zM571.6 251.47L488 
                182.56V44.05a12 12 0 0 
                0-12-12h-56a12 12 0 0 
                0-12 12v72.61L318.47 43a48 48 
                0 0 0-61 0L4.34 
                251.47a12 12 0 0 
                0-1.6 16.9l25.5 31A12 12 
                0 0 0 45.15 
                301l235.22-193.74a12.19 12.19 0 0 
                1 15.3 0L530.9 301a12 
                12 0 0 0 
                16.9-1.6l25.5-31a12 12 0 0 
                0-1.7-16.93z">
          </path>
        </svg>
      </p>
      <p 
        class={[
          'flex', 'items-center', 'justify-center', 'md:justify-end', 
          'mb-4'
        ].join(' ')}>
        info@pyramide-podologie.com
        <svg 
          aria-hidden="true"                  focusable="false" 
          data-prefix="fas"                   data-icon="envelope"
          class="w-4 ml-4"                    role="img" 
          xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">
          <path 
            fill="currentColor"
            d=" M502.3 190.8c3.9-3.1 9.7-.2 9.7 
                4.7V400c0 26.5-21.5 48-48 48H48c-26.5 
                0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 
                17.4 52.1 39.5 154.1 
                113.6 21.1 15.4 56.7 
                47.8 92.2 47.6 35.7.3 
                72-32.8 92.3-47.6 102-74.1 131.6-96.3 
                154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 
                132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 
                9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 
                85.5 0 112v19c0 7.4 
                3.4 14.3 9.2 18.9 
                30.6 23.9 40.7 32.4 
                173.4 128.7 16.8 12.2 
                50.2 41.8 73.4 41.4z">
          </path>
        </svg>
      </p>
      <p 
        class={[
          'flex', 'items-center', 'justify-center', 'md:justify-end', 
          'mb-4'
        ].join(' ')}>
        +41 76 714 87 87
        <svg 
          aria-hidden="true"                  focusable="false" 
          data-prefix="fas"                   data-icon="whatsapp"
          class="w-4 ml-4"                    role="img" 
          xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
        <path 
          d=" M13.601 2.326A7.854 7.854 0 
              0 0 7.994 0C3.627 
              0 .068 3.558.064 7.926c0 
              1.399.366 2.76 1.057 3.965L0 
              16l4.204-1.102a7.933 7.933 0 0 
              0 3.79.965h.004c4.368 0 7.926-3.558 
              7.93-7.93A7.898 7.898 0 0 
              0 13.6 2.326zM7.994 14.521a6.573 
              6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 
              6.56 0 0 1-1.007-3.505c0-3.626 
              2.957-6.584 6.591-6.584a6.56 6.56 0 
              0 1 4.66 1.931 
              6.557 6.557 0 0 
              1 1.928 4.66c-.004 3.639-2.961 
              6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 
              0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 
              1.916.81 2.049.098.133 1.394 2.132 
              3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 
              1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
          </path>
        </svg>
      </p>
    </div>
  )
}

export default Contact