import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../../../components/Dashboard/Dashboard'
import Market from '../../../components/Dashboard/Market/Market'
import OrderBook from '../../../components/Dashboard/Market/OrderBook/OrderBook'
import LayoutTwo from '../../../components/Layouts/LayoutTwo'
import { getProductView } from '../../../redux/features/orderBook'
import { wrapper } from '../../../redux/store'

const OrderBookPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Welcome to Comx</title>
            </Head>
            <LayoutTwo >
                <Dashboard>
                    <Market>
                        <OrderBook />
                    </Market>
                </Dashboard>
            </LayoutTwo>
        </div>
    )
}


// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {

//     await store.dispatch(getProductView(req))


//     return {
//         props: {
//         }
//     };

// })

export default OrderBookPage
