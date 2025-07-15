import {
    getKeypairFromEnvironment,
    airdropIfRequired
} from "@solana-developers/helpers";
import {
    Connection,
    Transaction,
    SystemProgram,
    PublicKey,
    sendAndConfirmTransaction
} from '@solana/web3.js';
import 'dotenv/config'

const payer = getKeypairFromEnvironment("SECRET_KEY");

const suppliedPubkey = process.argv[2] || null;

if(!suppliedPubkey){
    console.log("Please provide a public key to send to");
    process.exit(1);
}

const receiver = new PublicKey(suppliedPubkey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const transaction = new Transaction();

const transferInstruction =  SystemProgram.transfer({
    fromPubkey : payer.publicKey,
    toPubkey : receiver,
    lamports : 5000
})

transaction.add(transferInstruction);

const signature = await sendAndConfirmTransaction(connection,transaction,[payer]);

console.log(`Transaction signature is ${signature}`);