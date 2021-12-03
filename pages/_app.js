import 'tailwindcss/tailwind.css'
import Navigation from "../components/navbar/Navigation.js";
import Footer from "../components/Footer/Footer.js"
import { ThemeProvider } from 'next-themes'
import Skills from '../components/Skills/Skills.js'
import Contact from "../components/Contact/Contact.js"

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Navigation/>
    <Component {...pageProps} />
    <Skills/>
    <Contact/>
    <Footer/>
    </ThemeProvider>
    </>
}

export default MyApp
