import React from 'react'

import Bio from '@/components/molecules/bio'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-light">
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
