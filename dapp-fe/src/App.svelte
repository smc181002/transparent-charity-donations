<script lang="ts">
  import Web3 from "web3";
  import Nav from './lib/Nav.svelte';
  import Contract from './contracts/TrustedDonations.json'

  import MakeDonation from "./lib/MakeDonation.svelte";
  import { onMount } from "svelte";
  import DonationList from "./lib/DonationList.svelte";
  import CharityPay from "./lib/PaymentsList.svelte";
  import MakePayments from "./lib/MakePayments.svelte";
  import Beneficiaries from "./lib/Beneficiaries.svelte";

  const abi = Contract.abi
  const address = Contract.networks[5777].address

  const connectContract =async () => {
    // @ts-ignore
    window.web3 = await new Web3(window.ethereum)
    // @ts-ignore
    window.contract = await new window.web3.eth.Contract(abi, address)
    console.log("contract connected.")
  }
  onMount(async () => {
    await connectContract();
  })

  let tab = 0;

  let tabs = [
    "Donation Transactions",
    "Charity Pay Transactions",
    "Benefeciaries",
    "Owner Options",
  ]

  let active = (pos, tab) => ( (pos == tab) ? "bg-blue-100 text-blue-900" : "bg-gray-100")

  // let donations = [];

  const readContract = async() => {
    // @ts-ignore
    let data = await window.contract.methods.DonationList(1).call();
    console.log(data)
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&Roboto+Flex:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <Nav />
  <div>
  <div class="pt-24 w-4/5 mx-auto">
    <!-- <button class="bg-gray-200 px-4 py-2 rounded-full" on:click={connectContract}>Connect Contract</button> -->
    <!-- <button class="bg-gray-200 px-4 py-2 rounded-full"on:click={readContract}>Read Contract</button> -->
    <div class="bg-gray-100 rounded-full flex gap-0 w-full font-medium my-10 bg-grapy-200">
      {#each tabs as opt, i}
      <button class="{active(i, tab)} flex-1 px-4 py-6 rounded-full" on:click={() => (tab = i)}>{opt}</button>
      <!-- <button class="bg-gray-200 flex-1 px-4 py-6 rounded-full"on:click={() => (tab = 1)}>Charity Pay Transactions</button> -->
      {/each}
    </div>
    {#if tab == 1}
      <CharityPay />
    {:else if tab == 2}
      <Beneficiaries />
    {:else if tab == 3}
      <MakePayments />
    {:else}
      <div class="flex gap-x-24 items-start">
        <DonationList />
        <MakeDonation />
      </div>
    {/if}
  </div>
</main>