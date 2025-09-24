import React, { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Card from './components/card/card'
import CardProfile from "./components/card/card-profile"
import CardLarge from "./components/card/card-large"

function App() {
  const [showCardLarge, setShowCardLarge] = useState(false);
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-bg-body">
        
        {/* Header Tokens*/}
        <Header/>


        {/* Container Title & Card */}
        <section className='flex flex-col items-center gap-gap-lg'>

          {/* Title h2 Tokens */}
          <h2 className="text-text-title text-h2 font-600">
            Here put the title...
          </h2>

          {/* Card Default Tokens */}
          <Card/>

          {/* Demo Button for Card Large */}
          <button
            onClick={() => setShowCardLarge(true)}
            className="bg-bg-primary-button text-text-contrast px-button-lg-x py-button-lg-y rounded-button font-600 text-sm hover:opacity-90 transition-opacity"
          >
            Open Large Card Modal
          </button>

        </section>

          {/* Card Large Modal */}
          <CardLarge
            isOpen={showCardLarge}
            onCancel={() => setShowCardLarge(false)}
            onConfirm={() => {
              alert('Confirmed!');
              setShowCardLarge(false);
            }}
          />

          {/* Card Profile Tokens*/}
          <CardProfile/>

        {/* Footer Tokens*/}
        <Footer />
    </main>
  )
}
export default App
