import Web3 from "web3";
import { writable } from "svelte/store";

export const web3 = writable(new Web3(Web3.givenProvider || "ws://localhost:7545"));