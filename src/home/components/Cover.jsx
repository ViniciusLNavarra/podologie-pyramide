import React from "react";

function Cover() {
  return (
    <div class="bg-[url('../img/Home.jpg')] bg-cover bg-center h-[70vh]">
      <div
        class={[
          // darken image and add text 
          'bg-black/50', 'flex', 'h-full', 'pt-[55vh]',
          'pl-[5vw]'
        ].join(' ')}>
        <p class="text-white text-3xl font-allura">
          Lass die Schönheit dessen, was du liebst, das sein, was du tust
        </p>
      </div>
    </div>
  )
}

export default Cover