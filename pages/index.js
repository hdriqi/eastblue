import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-cyan-600 min-h-full h-full">
      <Head>
        <title>EAST BLUE</title>
        <meta name="description" content="East Blue is a crypto-venture studio that builds consumer crypto products with high emphasis on NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl mx-auto flex items-center justify-center h-full">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-2 md:p-8">
            <svg className="mx-auto" width="160" height="160" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M86 0H0V86H86V0ZM17 26C21.9706 26 26 21.9706 26 17C26 12.0294 21.9706 8 17 8C12.0294 8 8 12.0294 8 17C8 21.9706 12.0294 26 17 26ZM52 17C52 21.9706 47.9706 26 43 26C38.0294 26 34 21.9706 34 17C34 12.0294 38.0294 8 43 8C47.9706 8 52 12.0294 52 17ZM69 26C73.9706 26 78 21.9706 78 17C78 12.0294 73.9706 8 69 8C64.0294 8 60 12.0294 60 17C60 21.9706 64.0294 26 69 26ZM26 43C26 47.9706 21.9706 52 17 52C12.0294 52 8 47.9706 8 43C8 38.0294 12.0294 34 17 34C21.9706 34 26 38.0294 26 43ZM43 52C47.9706 52 52 47.9706 52 43C52 38.0294 47.9706 34 43 34C38.0294 34 34 38.0294 34 43C34 47.9706 38.0294 52 43 52ZM78 43C78 47.9706 73.9706 52 69 52C64.0294 52 60 47.9706 60 43C60 38.0294 64.0294 34 69 34C73.9706 34 78 38.0294 78 43ZM17 78C21.9706 78 26 73.9706 26 69C26 64.0294 21.9706 60 17 60C12.0294 60 8 64.0294 8 69C8 73.9706 12.0294 78 17 78ZM52 69C52 73.9706 47.9706 78 43 78C38.0294 78 34 73.9706 34 69C34 64.0294 38.0294 60 43 60C47.9706 60 52 64.0294 52 69ZM69 78C73.9706 78 78 73.9706 78 69C78 64.0294 73.9706 60 69 60C64.0294 60 60 64.0294 60 69C60 73.9706 64.0294 78 69 78Z" fill="white" />
            </svg>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-8xl font-bold text-white text-center">EAST</h1>
            <h1 className="-mt-6 text-8xl font-bold text-white text-center">BLUE</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
