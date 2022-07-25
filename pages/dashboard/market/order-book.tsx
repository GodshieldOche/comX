import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../../../components/Dashboard/Dashboard'
import Market from '../../../components/Dashboard/Market/Market'
import LayoutTwo from '../../../components/Layouts/LayoutTwo'

const OrderBookPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Welcome to Comx</title>
            </Head>
            <LayoutTwo >
                <Dashboard>
                    <Market>
                        
                    </Market>
                </Dashboard>
            </LayoutTwo>
        </div>
    )
}

export default OrderBookPage
