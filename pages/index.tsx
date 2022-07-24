import type { NextPage } from 'next'
import Head from 'next/head'
import LayoutOne from '../components/Layouts/LayoutOne'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome to Comx</title>
      </Head>
      <LayoutOne>
        <Welcome />
      </LayoutOne>
   </div>
  )
}

export default Home
