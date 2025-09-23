import Header from './components/header/header' 
import Footer from './components/footer/footer' 
import Card from './components/card/card'
import CardProfile from "./components/card/card-profile"

function App() {
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
          <CardProfile/>

        {/* Footer Tokens*/}
        <Footer />
    </main>
  )
}
export default App