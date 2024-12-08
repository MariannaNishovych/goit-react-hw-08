import { Suspense } from "react"
import AppBar from "./AppBar/AppBar"
import Loader from '../components/Loader/Loader';



const Layout = ({children}) => {
    const style = {
        maxWidth: 1000,
        margin: '0 auto',
        padding: '0 20px',     
    }
  return (
    <div style={style}>
        <AppBar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  )
}

export default Layout