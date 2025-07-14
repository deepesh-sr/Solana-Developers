import {
    Connection,
    PublicKey,
    SystemProgram,
    sendAndConfirmTransaction,
    Transaction
} from '@solana/web3.js'
import 'dotenv/config';
import { getKeypairFromEnvironment } from '@solana-developers/helpers'

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
    console.log("Please provide a pubkey to send to");
    process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(senderKeypair.publicKey.toBase58());

// receiver
const receiverKeypair = new PublicKey(suppliedToPubkey);

// creating connection : 
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(`✅ Loaded our own keypair, the destination public key, and connected to Solana`,)

// now lets create a transcation 
const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey : senderKeypair.publicKey,
    toPubkey : receiverKeypair,
    lamports : LAMPORTS_TO_SEND 
})

transaction.add(sendSolInstruction);

const startTime = Date.now();
// console.log(startTime);
// send the transaction to the cluster for confirmation 
const signature = await sendAndConfirmTransaction(connection,transaction,[senderKeypair])

// const endTime = Date.now();
// console.log(endTime);
console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${receiverKeypair}. in  seconds `,
);
console.log(`Transaction signature is ${signature}!`);