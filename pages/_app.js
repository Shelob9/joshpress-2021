import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col  flex-1 px-20">
          <Component {...pageProps} />
        </main>
      </div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </footer>
    </>
  )
}

export default MyApp
