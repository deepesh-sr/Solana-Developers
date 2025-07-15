import {Keypair} from '@solana/web3.js';

// importing the env file 
import 'dotenv/config'; 
import {getKeypairFromEnvironment} from '@solana-developers/helpers'

// importing connection and clusterapiURL for the connection.
import { Connection,clusterApiUrl,PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const kp = getKeypairFromEnvironment("SECRET_KEY")
// const kp = Keypair.generate();

// console.log("Keypair generated");
// console.log("we have loaded our seceret key from the env")
// console.log(`Public key is ${kp.publicKey.toBase58()}`);
// console.log(`Private key is ${kp.secretKey}`);

// creating a connection 
const connection = new Connection(clusterApiUrl('devnet'));
console.log("Connected")

// reading the balance for a public key. 
const address = new PublicKey("57UarZog8hYwawbbAm2zFwwssuHrfKMoup2b6KHwZxNK")
const balance = await connection.getBalance(address);
const balanceInSol = balance/LAMPORTS_PER_SOL;

console.log(`You address : ${address}`);
console.log(`Its balance : ${balance} in Lamports \n Balance in Sol : ${balanceInSol}`);


