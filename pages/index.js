import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { getSession } from 'next-auth/client'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        {/* widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
