<script lang="ts">
  let address = "";
  let amount = "1";

  let address_add = "";
  let limit = "1";
  let name_add = "";

  import {account} from '../stores/account'
  import {web3} from '../stores/web3provide'

  const makePayment =async () => {
    const amountWei = $web3.utils.toWei(amount, 'gwei')
    console.log(name, amountWei)
      // @ts-ignore
      let tx = await window.contract.methods
                  .payBeneficiary(address, amountWei)
                  .send({from: $account});
      console.log(tx)
  }

  const addBeneficiary = async () => {
      // @ts-ignore
      const amountWei = $web3.utils.toWei(limit, 'gwei')
      console.log(name_add, address_add)
      let tx = await window.contract.methods
                  .addBeneficiary(name_add, address_add, amountWei)
                  .send({from: $account});
      console.log(tx)
  }

</script>

<div class="w-1/3 mx-auto mb-20">
  <div class="text-xl my-2">Pay Benefeciaries</div>
  <form class="flex flex-col gap-4 justify-start mb-10" on:submit|preventDefault={makePayment}>
      <label class="flex flex-col mb-1">
        <div>Address of User</div>
        <input bind:value={address} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full">
      </label>
      <label class="flex flex-col mb-1">
        <div>Amount Required in Gwei</div>
        <input bind:value={amount} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full">
      </label>
      <button class="bg-blue-600 text-white px-6 py-2 rounded-full">Make Payment</button>
  </form>

  <br class="bg-blue-400"/>

  <form class="flex flex-col gap-4 justify-start" on:submit|preventDefault={addBeneficiary}>
    <div class="text-xl my-2">Add Beneficiariy</div>
      <label class="flex flex-col mb-1">
        <div>Name</div>
        <input bind:value={name_add} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full">
      </label>
      <label class="flex flex-col mb-1">
        <div>Address of the Beneficiary</div>
        <input bind:value={address_add} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full">
      </label>
      <label class="flex flex-col mb-1">
        <div>Limit of the amount</div>
        <input bind:value={limit} type="text" class="border-2 border-gray-300 px-4 py-2 rounded-full">
      </label>
      <button class="bg-blue-600 text-white px-6 py-2 rounded-full">Add beneficiary</button>
  </form>
</div>