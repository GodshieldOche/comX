import type { NextPage } from 'next'
import Head from 'next/head'
import LayoutOne from '../../components/Layouts/LayoutOne'
import FormWrapper from '../../components/Auth/Register/FormWrapper'
const LogIn: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Register on Comx</title>
            </Head>
            <LayoutOne>
                <FormWrapper />
            </LayoutOne>
        </div>
    )
}

export default LogIn
