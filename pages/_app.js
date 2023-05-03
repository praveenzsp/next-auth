import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import NavbarComponent from "@/components/Navbar";
import { useState } from "react";

export default function App({Component,pageProps: { session, ...pageProps }}) {

  const lightTheme=createTheme({
    type:'light'
  })

  const darkTheme=createTheme({
    type:'dark'
  })



  return (
    <NextUIProvider theme={darkTheme}>
      <SessionProvider session={session}>
        <NavbarComponent/>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
}
