import { PublicKey , 
    Connection,
    LAMPORTS_PER_SOL,
 } from "@solana/web3.js";

import { performReverseLookup} from '@bonfida/spl-name-service';
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

const pubkey = new PublicKey("shaq.sol");

// on curve address
const key = new PublicKey("5oNDL3swdJJF1g9DzJiZ4ynHXgszjAEpUkxVYejchzrY");
console.log(PublicKey.isOnCurve(key.toBytes()));


// const offCurveAddress = new PublicKey(
//     "4BJXYkfvg37zEmBbsacZjeQDpTNx91KppxFJxRqrz48e"
// );
// console.log(PublicKey.isOnCurve(offCurveAddress.toBytes()));