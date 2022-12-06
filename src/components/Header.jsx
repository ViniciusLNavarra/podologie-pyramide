import React from 'react';

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-md shadow-lg py-2 h-[7vh] bg-white flex items-center w-full justify-between fixed top-0 right-0 left-0"
      >
        <div className="px-6">
          <div>
            <ul className="navbar-nav mr-auto flex md:flex-row">
              <li className="nav-item">
                <a
                  className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >Home</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >Features</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >Pricing</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;