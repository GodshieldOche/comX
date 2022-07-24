import type { NextPage } from 'next'
import Head from 'next/head'
import LayoutOne from '../../components/Layouts/LayoutOne'
import SignIn from '../../components/Auth/SignIn/SignIn'

const LogIn: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Sign in to Comx</title>
            </Head>
            <LayoutOne>
                <SignIn />
            </LayoutOne>
        </div>
    )
}

export default LogIn
