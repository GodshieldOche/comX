import { serialize } from 'cookie'



export default function handler( req,  res) {
   const {token, stay} = req.body

    let serialised;

    if (stay) {
        serialised = serialize("OursiteJWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: stay && 60 * 60 * 24 * 30,
            path: "/",
        });
    } else {
        serialised = serialize("OursiteJWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/",
        });
    }
    

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
    
}
