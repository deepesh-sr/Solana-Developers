import {Keypair} from '@solana/web3.js';

// importing the env file 
import 'dotenv/config'; 
import {getKeypairFromEnvironment} from '@solana-developers/helpers'

const kp = getKeypairFromEnvironment("SECRET_KEY")
// const kp = Keypair.generate();

// console.log("Keypair generated");
console.log("we have loaded our seceret key from the env")
console.log(`Public key is ${kp.publicKey.toBase58()}`);
console.log(`Private key is ${kp.secretKey}`);
