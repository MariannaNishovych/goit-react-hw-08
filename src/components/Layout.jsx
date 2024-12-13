// import { Suspense } from "react"
import AppBar from "./AppBar/AppBar"
// import Loader from './Loader/Loader';
import { Outlet } from "react-router-dom";

// {children}
const Layout = () => {
    const style = {
        maxWidth: 1000,
        margin: '0 auto',
        padding: '0 20px',     
    }
  return (
    // <div style={style}>
    //     <AppBar />
    //     <Suspense fallback={<Loader />}>{children}</Suspense>
    // </div>

    <div style={style}>
    <AppBar />
    <Outlet />
  </div>
  )
}

export default Layout;