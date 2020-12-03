import React from 'react'
import { Link } from 'gatsby'

import Bio from '@/components/bio'

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="py-4 flex justify-between container">
        <Bio />
        <small className="self-end text-white">
          &copy; {new Date().getFullYear()} K.Iwata
        </small>
      </div>
    </footer>
  )
}

export default Footer
