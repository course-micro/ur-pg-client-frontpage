import "../../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import { ToastContaner } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import '../../tailwindcss/style.css'

Nprogress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContaner position="top-center"></ToastContaner>
    </>
  );
}
