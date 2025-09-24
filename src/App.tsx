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

        </section>
        
        {/* Card Profile Tokens*/}
        <CardProfile />
        
        {/* Demo Button for Card Large */}
        <button
          onClick={() => setShowCardLarge(true)}
          className="min-h-11 flex flex-row flex-wrap justify-center items-center bg-bg-primary-button px-button-lg-x py-button-lg-y rounded-button text-text-contrast font-600 text-sm"
        >
          Open Large Card Modal
        </button>

        {/* Card Large Modal */}
        <CardLarge
          isOpen={showCardLarge}
          onCancel={() => setShowCardLarge(false)}
          onConfirm={() => {
            alert('Confirmed!');
            setShowCardLarge(false);
          }}
        />


        {/* Footer Tokens*/}
        <Footer />
    </main>
  )
}
export default App
