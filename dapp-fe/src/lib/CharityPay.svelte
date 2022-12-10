<script lang="ts">

  import {web3} from '../stores/web3provide'
  import EmptySvg from './EmptySvg.svelte';
  const options:Intl.DateTimeFormatOptions = { dateStyle: 'full', timeStyle: 'short' };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const viewPayments = async () => {
    await sleep(1)
    let payments = [];
    let len=0;
    try {
        len = await window.contract.methods.totalCharity().call();
    } catch {
        return payments
    }

    for (let index = 0; index < len; index++) {
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
                    <div class="flex-1"> 
                        <div class="flex w-fit text-sm rounded-full px-4 py-1 bg-blue-100 text-blue-900">
                            {(new Date(parseInt(payment.time)*1000)).toLocaleString("en-IN", options)}
                        </div>
                    </div>
                    <div class="flex-1 flex justify-end items-center"> 
                        {$web3.utils.fromWei(payment.paidAmount, 'Gwei')} Gwei 
                        <svg class="w-6 h-6" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54192 1.3125L3.03186 6.80444L7.00174 8.75569L10.9086 6.80269L7.46067 1.3125H6.54192ZM6.56249 2.90369V4.80725L4.85011 5.58425L6.56249 2.90369ZM7.43749 2.92119L9.10786 5.58119L7.43749 4.81469V2.92163V2.92119ZM6.56249 5.768V7.56481L4.66199 6.62988L6.56249 5.768ZM7.43749 5.77806L9.29511 6.63119L7.43749 7.55912V5.77763V5.77806ZM3.06249 7.6615V8.764L6.53099 12.6328H7.46899L10.9375 8.76356V7.66106L6.99999 9.67969L3.06249 7.6615ZM5.04042 9.65912L6.56249 10.4392V11.3562L5.04042 9.65912ZM8.95955 9.65912L7.43749 11.3562V10.4392L8.95955 9.65912Z" fill="#444F56"/>
                        </svg>
                    </div>
                    
                </div>
            {/each}
        {:else}
            <div class="flex flex-col items-center justify-center">
                <EmptySvg />
                <div class="pt-4">No Charity Payments done</div>
            </div>
        {/if}
    {/await}

</div>