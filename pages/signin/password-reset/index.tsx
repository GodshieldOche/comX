import type { NextPage } from 'next'
import Head from 'next/head'
import PasswordReset from '../../../components/Auth/SignIn/PasswordReset/PasswordReset'
import LayoutOne from '../../../components/Layouts/LayoutOne'

const PasswordResetPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Reset Password</title>
            </Head>
            <LayoutOne>
                <PasswordReset step="one" />
            </LayoutOne>
        </div>
    )
}

export default PasswordResetPage
