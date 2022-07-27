import type { NextPage } from 'next'
import Head from 'next/head'
import LayoutOne from '../components/Layouts/LayoutOne'
import Welcome from '../components/Welcome'
import { wrapper } from '../redux/store'

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


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {


  return {
    props: {
    }
  };
});

export default Home
