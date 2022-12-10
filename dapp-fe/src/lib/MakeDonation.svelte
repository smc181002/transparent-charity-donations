<script lang="ts">
  let name_t = "";
  let amount_t = "1";

  import {account} from '../stores/account'
  import {web3} from '../stores/web3provide'

  const makeDonation =async () => {
    const amountWei = $web3.utils.toWei(amount_t, 'gwei')
    console.log(name_t, amountWei)
      // @ts-ignore
      let tx = await window.contract.methods
                  .makeDonation(name_t)
                  .send({from: $account, value:amountWei});
      console.log(tx)
  }

</script>

<form class="flex flex-col gap-4 justify-end pt-8" on:submit|preventDefault={makeDonation}>
    <label>
      <div class="pl-2">Name</div>
      <input bind:value={name_t} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full" placeholder="Name">
    </label>
    <label>
      <div class="pl-2">Amount in Gwei</div>
      <input bind:value={amount_t} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full" placeholder="Amount in Gwei">
    </label>
    <button class="bg-blue-600 text-white px-6 py-2 rounded-full">Make Donation</button>
</form>

