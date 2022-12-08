<script lang="ts">

  import {web3} from '../stores/web3provide'
  import EmptySvg from './EmptySvg.svelte';

//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

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
<div class="flex flex-col gap-2 pt-8">
    {#await viewDonations()}
    <div class="flex justify-center w-full mx-auto">
        loading
    </div>
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
                <EmptySvg />
                <div class="pt-4">No donations made</div>
            </div>
        {/if}
    {/await}

</div>