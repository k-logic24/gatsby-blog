import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="relative h-full container">
        <Link to="/" className="text-white pos-c-c">
          Iwata's Diary
        </Link>
        <nav className="pos-c-r">
          <ul className="flex">
            <li>
              <button type="button" className="text-white">
                ボタンです
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
