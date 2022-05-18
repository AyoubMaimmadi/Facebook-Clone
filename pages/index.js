import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      <h1>Hello world</h1>

      {/* Header  */}
      <Header />

      <main>
        {/* sidbar */}
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  )
}
