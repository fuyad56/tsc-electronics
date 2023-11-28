import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import Category from './Category'

export default function Products() {
  return (
    <div>
        {/* Navbar */}
        <Navbar />
        
        <Category />
        {/* Footer */}
        <Footer />
    </div>
  )
}
