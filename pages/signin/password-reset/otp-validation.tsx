import type { NextPage } from 'next'
import Head from 'next/head'
import PasswordReset from '../../../components/Auth/SignIn/PasswordReset/PasswordReset'
import LayoutOne from '../../../components/Layouts/LayoutOne'

const OtpValidationPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>OTP Validation</title>
            </Head>
            <LayoutOne>
                <PasswordReset step="two" />
            </LayoutOne>
        </div>
    )
}

export default OtpValidationPage
