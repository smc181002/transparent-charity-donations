<script lang="ts">

  import {web3} from '../stores/web3provide'
  import EmptySvg from './EmptySvg.svelte';
  const viewPayments =async () => {
    // @ts-ignore
    const len = await window.contract.methods.totalCharity().call();

    let payments = [];
    for (let index = 0; index < len; index++) {
      // @ts-ignore
      let data = await window.contract.methods.PaymentList(index).call();
      payments[index] = data
    }

    return payments
  }

</script>
<div class="flex flex-col gap-2 pt-8">
    {#await viewPayments()}
        ..loading..
    {:then donations} 
        {#if donations.length > 0}
            <div class="flex gap-4 font-bold">
                <div class="flex-1"> Paid To </div>
                <div class="flex-1"> Paid By </div>
                <div class="flex-1 flex justify-end"> Charity Payment </div>
            </div>
            {#each donations as donation}
                <div class="flex gap-4">
                    <div class="flex-1"> 
                        {donation.donorName} 
                    </div>
                    <div class="flex-1"> 
                        {donation.donorAddr.toLowerCase().substring(0,10)}...{donation.donorAddr.toLowerCase().substring(34)} 
                    </div>
                    <!-- <div> {new Date(parseInt(donation.time))}</div> -->
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