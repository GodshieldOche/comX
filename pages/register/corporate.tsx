import type { NextPage } from 'next'
import Head from 'next/head'
import FormWrapper from '../../components/Auth/Register/FormWrapper'
import LayoutOne from '../../components/Layouts/LayoutOne'

const LogIn: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Register new account</title>
            </Head>
            <LayoutOne>
                <FormWrapper />
            </LayoutOne>
        </div>
    )
}

export default LogIn
