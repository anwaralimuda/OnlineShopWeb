function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Your Title</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
  
  export default MyApp;
  