import Head from 'next/head'
import { GlobalStyle, SplashScreen, NavBar, Hero, About, Projects, Contact, Footer } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Jain</title>
        <meta name="description" 
          content="Ayush Jain is a passout computer science student at the S.D.I.E.T." />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <GlobalStyle />
      <SplashScreen />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </> 
  )
}
