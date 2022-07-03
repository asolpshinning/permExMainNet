// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var admin = require("firebase-admin");
//import firebase from 'firebase';
var serviceAccount = require("./serviceAccountKey.json");
const addr = `0x9d2b724d4fdc33821d735edb83ba39a3869a2943b630552f8f8525922317a9ca`
let authenticated = false;
//default handler from NextJS
export default function handler(req, res) {

  try {
      //authenticate user session
    const authenticateUser = () => {
      if (req.body.address === addr) {authenticated = true} ;
      return authenticated;
    }
    authenticateUser(); 
    console.log(`authenticateUser just worked on line 16`)
    //initialize admin access to app
    if (authenticated && admin.app.length === 0) {
      console.log(admin.app.length);
      admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    }); 
    //store the user info to database, if authenticated
    //
    console.log(`checking authenticated on line 25: `, authenticated);
    }
    //send response back to front end
    if (authenticated) return res.status(200).json({ success: 'We will store your info to database' })
    else return res.status(203).json({ failure: 'Your session is not authenticated', address: req.body.address })
  } catch (err) {
    console.log(`error: `, err)
  }
  
}
