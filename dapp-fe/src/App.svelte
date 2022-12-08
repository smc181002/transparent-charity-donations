<script lang="ts">
  import Web3 from "web3";
  import Nav from './lib/Nav.svelte';
  import Contract from './contracts/TrustedDonations.json'

  import MakeDonation from "./lib/MakeDonation.svelte";
  import { onMount } from "svelte";
  import DonationList from "./lib/DonationList.svelte";
  import {web3} from './stores/web3provide'

  const abi = Contract.abi
  const address = Contract.networks[5777].address

  const connectContract =async () => {
    // @ts-ignore
    window.web3 = await new Web3(window.ethereum)
    // @ts-ignore
    window.contract = await new window.web3.eth.Contract(abi, address)
    console.log("contract connected.")
  }
  // onMount(async () => {
  connectContract();
  // })

  // let donations = [];

  const readContract = async() => {
    // @ts-ignore
    let data = await window.contract.methods.DonationList(1).call();
    console.log(data)
  }

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const viewDonations = async () => {
    await sleep(1)
    // @ts-ignore
    const len = await window.contract.methods.totalDonations().call();

    let donations = [];
    for (let index = 0; index < len; index++) {
      // @ts-ignore
      let data = await window.contract.methods.DonationList(index).call();
      donations[index] = data
      // console.log(new Date(parseInt(data.time)*1000))
    }

    return donations
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
    <button class="bg-gray-200 px-4 py-2 rounded-full"on:click={readContract}>Read Contract</button>
    <MakeDonation />
    <!-- <DonationList /> -->
    <div class="flex flex-col gap-2 pt-8">
        {#await viewDonations()}
            ..loading..
        {:then donations} 
            {#if donations.length > 0}
                <div class="flex gap-4 font-bold">
                    <div class="flex-1"> Donor Name </div>
                    <div class="flex-1"> Transaction Time </div>
                    <div class="flex-1 flex justify-end"> Donation </div>
                </div>
                {#each donations as donation}
                    <div class="flex gap-4">
                        <div class="flex-1"> 
                            {donation.donorName} ({donation.donorAddr.toLowerCase().substring(0,10)}...{donation.donorAddr.toLowerCase().substring(34)})
                        </div>
                        <div class="flex-1"> {(new Date(parseInt(donation.time)*1000)).toLocaleString("en-IN")}</div>
                        <div class="flex-1 flex justify-end"> 
                            {$web3.utils.fromWei(donation.donateAmount, 'Gwei')} Gwei 
                        </div>
                    </div>
                {/each}
            {:else}
                <div class="flex flex-col items-center justify-center">
                    <!-- <EmptySvg /> -->
                    <div class="pt-4">No donations made</div>
                </div>
            {/if}
        {/await}

    </div>
  </div>
</main>