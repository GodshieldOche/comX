// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    token: string | null
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
    const { cookies } = req

    const jwt = cookies.OursiteJWT;

    if (jwt) {
        res.status(200).json({ token: jwt })
    } else {
        res.status(401).json({ token: null })
    }
}
