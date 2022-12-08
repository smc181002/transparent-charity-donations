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
    <div class="flex-1 font-medium flex items-center text-xl">Trusted Donations</div>
    <div>
    
    {#if accounts != undefined }
        {#if accounts.length > 0 }
            <div class="flex px-6 p-2 font-medium text-blue-800 bg-blue-100 rounded-full">
                {accounts[0].substring(0,6)}...{accounts[0].substring(38)}
            </div>
        {:else}
            <button class="flex px-4 pr-6 p-2 text-white bg-blue-600 rounded-full" on:click={connectWallet}>
                <svg class="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9855 17.508H13.1165L13.4795 19.2155H11.812" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.079 15.8855L15.294 15.992L13.1165 17.508L13.3085 8.39201L14.504 5.42501L20.3105 3.11951L21.25 5.98001L20.396 9.35301L20.4815 11.0605L19.9265 11.8795L21.079 15.8855ZM21.079 15.8855L20.033 20.1335L15.7635 18.81L13.4795 20.8805H11.9855M19.9265 11.8795L15.849 10.6765M20.396 9.35301L21.143 9.22501M21.143 10.164L20.441 10.2495M13.2195 12.622L17.194 12.5335" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.8235 15.9455L15.7635 18.81L15.294 15.992L17.194 12.5335L15.849 10.6765L13.3085 8.39201L20.3105 3.11951M13.1165 17.508L15.7635 18.81" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.504 5.42499H11.9855M12.0145 17.508H10.8835L10.5205 19.2155H11.812M13.725 14.8315L15.318 14.239L14.181 13.6465L13.725 14.8315V14.8315Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.921 15.8855L8.706 15.992L10.8835 17.508L10.6915 8.39201L9.496 5.42501L3.6895 3.11951L2.75 5.98001L3.604 9.35301L3.5185 11.0605L4.0735 11.8795L2.921 15.8855L3.967 20.1335L8.2365 18.81L10.5205 20.8805H12.0145M4.0735 11.8795L8.151 10.6765M3.604 9.35301L2.8565 9.22501M2.8565 10.164L3.559 10.2495M10.7805 12.622L6.806 12.5335" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.17651 15.9455L8.23651 18.81L8.70601 15.992L6.80601 12.5335L8.15101 10.6765L10.6915 8.39201L3.68951 3.11951M10.8835 17.508L8.23651 18.81" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.49601 5.42499H12.0145M10.275 14.8315L8.68201 14.239L9.81901 13.6465L10.275 14.8315V14.8315Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Connect Wallet
            </button>
        {/if}
    {/if}
    </div>
</main>