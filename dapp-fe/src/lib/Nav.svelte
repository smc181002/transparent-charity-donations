<script>
  import {account} from "../stores/account";

  let accounts;
  const connectWallet = async () => {
    // @ts-ignore
    if (typeof window != undefined && typeof window.ethereum != undefined) {
      try {
        // @ts-ignore
        accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        // console.log(accounts);
        account.set(accounts[0]);
      } catch {
        console.log("unable to connect");
        // throw new Error("Wallet Connection Failed")
      }
    } else {
      console.log("Wallet not installed, Please install a wallet")
      throw new Error("Wallet Software not installed")
    }
  }

  let getCurrentAccounts = async () => {
    // @ts-ignore
    if (typeof window != undefined && typeof window.ethereum != undefined) {
      try {
        if (accounts == undefined ) {
        // @ts-ignore
            accounts = await window.ethereum.request({method: "eth_accounts"})
            // console.log(accounts);
            account.set(accounts[0]);
        }
      } catch {
        console.log("unable to connect");
      }
    } else {
      console.log("Wallet not installed, Please install a wallet")
      throw new Error("Wallet Software not installed")
    }

  }

  getCurrentAccounts()
//   let connection = connectWallet();
</script>

<main class="flex px-8 py-6 border-b-2 border-b-gray-100 bg-white/40 backdrop-blur w-full fixed items-center">
    <div class="flex-1 font-medium flex items-center text-xl bg-transparent">Trusted Donations</div>
    <div>
    
    {#if accounts != undefined }
        {#if accounts.length > 0 }
            <div class="flex px-6 p-2 font-medium text-blue-800 bg-blue-100 rounded-full">
                {accounts[0].substring(0,6)}...{accounts[0].substring(38)}
            </div>
        {:else}
            <button class="flex px-6 p-2 text-white bg-blue-600 rounded-full" on:click={connectWallet}>
                Connect Wallet
            </button>
        {/if}
    {/if}
    </div>
</main>