<script lang="ts">
  let name = "";
  let amount = "1";

  import {account} from '../stores/account'
  import {web3} from '../stores/web3provide'

  const makeDonation =async () => {
    const amountWei = $web3.utils.toWei(amount, 'gwei')
    console.log(name, amountWei)
      // @ts-ignore
      let tx = await window.contract.methods
                  .makeDonation(name)
                  .send({from: $account, value:amountWei});
      console.log(tx)
  }

</script>

<form class="flex gap-4 justify-end" on:submit|preventDefault={makeDonation}>
    <input bind:value={name} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full" placeholder="Name">
    <input bind:value={amount} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full" placeholder="Amount in Gwei">
    <button class="bg-blue-600 text-white px-6 py-2 rounded-full">Make Donation</button>
</form>

