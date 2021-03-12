import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Bio from '@/components/molecules/bio'
import { footerNavs } from '@/constants'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-light py-4 sm:py-8">
      <div className="sm:px-4 md:px-0 grid gap-4 sm:grid-cols-2 items-end justify-center max-w-screen-md mx-auto">
        <nav>
          <ul>
            {footerNavs.map(nav => (
              <li key={nav.txt}>
                <Link
                  to={nav.path}
                  className="text-white font-dosis p-1 inline-block uppercase"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="align-middle mr-2"
                  />
                  {nav.txt}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Bio />
      </div>
      <div className="text-center mt-8">
        <small className="text-white">
          &copy; {new Date().getFullYear()} K.Iwata
        </small>
      </div>
    </footer>
  )
}

export default Footer
