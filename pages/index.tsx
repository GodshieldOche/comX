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

  if (typeof window !== "undefined") {
    // if (payload?.data?.token) {
    //   sessionStorage.setItem("data", JSON.stringify(payload.data.token))
    //   localStorage.removeItem("data")
    // } else {
    //   sessionStorage.removeItem("data")
    // }

    let data: any = localStorage.getItem("data")

    console.log(JSON.parse(data))

  }

  return {
    props: {
    }
  };
});

export default Home
