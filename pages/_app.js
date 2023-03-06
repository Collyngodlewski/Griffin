import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

const customTheme = createTheme({
  type: "dark",
  theme: {
      colors: {
   primary: "#AAFFEC",
      },
  },
});


function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <NextThemesProvider
	  defaultTheme="system"
	  attribute="class"
	  value={{
	    dark: customTheme.className,
	  }}
    >
      <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
      </NextThemesProvider>
    </SessionContextProvider>
  )
}
export default MyApp