<script lang="ts">

  import {web3} from '../stores/web3provide'
  import EmptySvg from './EmptySvg.svelte';

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const viewPayments = async () => {
    await sleep(1)
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
        <div class="flex justify-center w-full mx-auto">
            loading
        </div>
    {:then payments} 
        {#if payments.length > 0}
            <div class="flex gap-4 font-bold">
                <div class="flex-1"> Paid to </div>
                <div class="flex-1"> Paid by </div>
                <div class="flex-1"> Transaction Time </div>
                <div class="flex-1 flex justify-end"> Chairty Amount </div>
            </div>
            {#each payments as payment}
                <div class="flex gap-4">
                    <div class="flex-1"> 
                        ({payment.beneficiaryAddr.toLowerCase().substring(0,10)}...{payment.beneficiaryAddr.toLowerCase().substring(34)})
                    </div>
                    <div class="flex-1"> 
                        ({payment.ownerId.toLowerCase().substring(0,10)}...{payment.ownerId.toLowerCase().substring(34)})
                    </div>
                    <div class="flex-1"> {(new Date(parseInt(payment.time)*1000)).toLocaleString("en-IN")}</div>
                    <div class="flex-1 flex justify-end"> 
                        {$web3.utils.fromWei(payment.donateAmount, 'Gwei')} Gwei 
                    </div>
                </div>
            {/each}
        {:else}
            <div class="flex flex-col items-center justify-center">
                <EmptySvg />
                <div class="pt-4">No Charity Payments done made</div>
            </div>
        {/if}
    {/await}

</div>