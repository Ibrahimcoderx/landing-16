


// Common Css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/common.css";
import "../styles/order_section.css";
import "../styles/common_component.css";

// main_page_css


// landing Css
// import "../styles/landing_one/landing_one.css";

import "../styles/landing-16/landing_sixteen.css";

// Theme Css

// import '../styles/theme_two/theme_two_media.css';


import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
          <Component {...pageProps} />
      {/* </SSRProvider> */}
    </>
  );
}

export default MyApp;
