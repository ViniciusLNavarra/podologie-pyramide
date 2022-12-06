import React from 'react'
import Services from './Services'
import Contact from './Contact'

function Content() {
  return (
    <div>
      <div class="relative mt-[7vh]">
          <div class="bg-content-img mx-auto h-[93vh] w-max overflow-y-scroll bg-cover shadow-lg" style={{backgroundPosition: "center"}}>
            <div class="mt-[88vh] w-[100vw]">
              <div class="bg-white p-4 sm:p-8">
                <Services />
                <Contact />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Content