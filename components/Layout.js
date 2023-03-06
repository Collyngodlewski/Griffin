import React from "react";

import Head from "next/head";

import NavBar from "./NavBar";

import {
  NextUIProvider,
  createTheme,
  Container,
} from "@nextui-org/react";



const fonts = {
  sans: "'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue' ",
};

// const theme = createTheme({
//     type: "dark",
//     theme: {
//       colors: {
//         primary: 'white',
//         secondary: 'white',
//         text: 'white'
//       },
//       space: {},
//       fonts: {}
//     }
//   })

const Layout = ({ children, title = "This is the default title" }) => (
  <div>
    <NextUIProvider>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Container
        css={{
          h: "100%",
        }}
      >
        {children}
      </Container>
      {/* <Footer /> */}
    </NextUIProvider>
  </div>
);

export default Layout;
