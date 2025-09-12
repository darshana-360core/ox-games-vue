<!-- components/DepositModal.vue -->
<template>
  <v-dialog
    v-model="show"
    max-width="480"
    content-class="deposit-modal"
    @click:outside="close"
    @click.self="close"
  >
    <div class="game-frame-2">
        <div class="d-flex items-center justify-center relative mb-4">
            <h3 class="font-semibold text-center text-lg">Deposit</h3>
            <button class="close-btn w-9 h-7 bg-white bg-opacity-5 hover:bg-primary-base flex items-center justify-center rounded-lg absolute top-0 right-0" @click="close">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
        <div class="bg-white bg-opacity-5 rounded-2xl p-4">

            <v-form>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <v-select
                      :label="$t('Pay with')"
                      solo
                      :items="[
                        { name: 'Dapp', icon: '/images/dapp.png' },
                        { name: 'QR', icon: '/images/qr.png' }
                      ]"
                      item-text="name"
                      item-value="name"
                      dense
                      class="small-input rounded-lg col-span-2"
                      v-model="selectedPaymentMethod"
                      @change="onPaymentMethodChange"
                    >
                      <!-- Dropdown items -->
                      <template v-slot:item="{ item, attrs, on }">
                        <v-list-item v-bind="attrs" v-on="on" dense>
                          <v-list-item-content>
                            <v-list-item-title class="text-white py-0">
                              {{ item.name }}
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </template>

                      <!-- Selected chip -->
                      <template v-slot:selection="{ item }">
                        <v-chip small outlined>
                         
                          {{ item.name }}
                        </v-chip>
                      </template>
                    </v-select>

                    <v-select
                         :label="$t('Deposit Currency')"
                         solo
                         :items="items"
                         item-text="name"
                         item-value="name"
                         dense
                         class="small-input rounded-lg"
                         v-model="selectedCurrency"
                         @change="onCurrencyChange"
                     >
                        <template v-slot:item="{ item, attrs, on }">
                            <v-list-item v-bind="attrs" v-on="on" dense>
                                <v-list-item-avatar class="mr-0 my-0">
                                    <img :src="item.icon" :alt="item.name" style="width: 26px; height: 26px;" />
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="text-white py-0">
                                    {{ item.name }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                        
                        <template v-slot:selection="{ item }">
                            <v-chip small outlined>
                            <v-avatar left>
                                <img :src="item.icon" :alt="item.name" style="width: 18px; height: 18px;" />
                            </v-avatar>
                            {{ item.name }}
                            </v-chip>
                        </template>
                    </v-select>
                    
                    <v-select
                         :label="$t('Choose CoinNetwork')"
                         solo
                         :items="selectedCurrency ? networks[selectedCurrency] : []"
                         dense
                         class="small-input rounded-lg"
                         :disabled="!selectedCurrency"
                         v-model="selectedNetwork"
                         @change="onNetworkChange"
                     >
                         <template v-slot:item="{ item, attrs, on }">
                             <v-list-item v-bind="attrs" v-on="on" dense>
                                 <v-list-item-content>
                                     <v-list-item-title class="text-white py-0">
                                     {{ item }}
                                     </v-list-item-title>
                                 </v-list-item-content>
                             </v-list-item>
                         </template>
                         
                         <template v-slot:selection="{ item }">
                             <v-chip small outlined>
                             {{ item }}
                             </v-chip>
                         </template>
                    </v-select>
                </div>
               <v-text-field
                  v-if="selectedPaymentMethod === 'Dapp'"
                  :label="$t('Deposit Amount')"
                  name="amount"
                  type="number"
                  outlined
                  dense
                  class="small-input"
                  v-model="amount"
                />
                <v-btn density="default" class="primary w-full mt-6" color="primary" @click="submit">Deposit</v-btn>
                <v-btn density="default" class=" w-full mt-2" color="" @click="close">Cancel</v-btn>
               
            </v-form>
        </div>
    </div>
  </v-dialog>
</template>

<script>
import axios from 'axios';
import { ethers } from "ethers";

export default {
  data() {
    
    return {
      show: false,
      amount: null,
      selectedPaymentMethod:null,
      selectedCurrency: null,
      selectedNetwork: null,
      isPolygonActive: true,
      selectCoinPrice : 0,
      items: [
        { name: 'OC', icon: '/images/ox-icon.png'},
        { name: 'OXINOX', icon: '/images/oxinox-icon.png'},
        { name: 'USDT', icon: '/images/usdt.webp'},
      ],
      networks : {
        OC: ["Polygon"],
        OXINOX: ["Polygon"],
        USDT: ["Polygon","Eth","Bsc","Tron"],
      }
    }
  },
  created() {
    this.$root.$on('open-deposit-modal', this.open)
  },
  beforeDestroy() {
    this.$root.$off('open-deposit-modal', this.open)
  },
  methods: {
    async open() {
      const { data } = await axios.get('/api/deposit', {})
      if(data.success != true){
        const res = await fetch("https://thecrypto360.com/polygonscan.php");
        const jsonRes = await res.json()
        if(jsonRes?.status_code == 0){
            this.items = this.items.filter(item => {
                const nets = this.networks[item.name] || [];

                if (nets.length === 1 && nets.includes("Polygon")) {
                  return false; 
                }

                return true;
            });

            Object.keys(this.networks).forEach(key => {
              this.networks[key] = this.networks[key].filter(n => n !== "Polygon");
              if (this.networks[key].length === 0) {
                delete this.networks[key];
              }
            });
        }
        this.show = true
      }else{
       window.location.href = '/user/account/deposits/create'
      }
    },
    close() {
       this.show = false
       this.amount = null
       this.selectedCurrency = null
       this.selectedNetwork = null
    },
    onPaymentMethodChange(method) {
      this.selectedPaymentMethod = method
      // This method is called when currency changes
      // selectedCurrency is automatically updated via v-model
    },
    onCurrencyChange(currency) {
      this.selectedCurrency = currency
      // This method is called when currency changes
      // selectedCurrency is automatically updated via v-model
    },
    async onNetworkChange(network) {
      this.selectedNetwork = network
      if(network == "OC"){
         const res = await fetch("https://oc-price-api.vercel.app/oc-price");
        const jsonRes = await res.json()
        this.selectCoinPrice = jsonRes['price'];
      }else if (network == "OXINOX"){
        const oxinoxres = await fetch("https://oc-price-api.vercel.app/oxinox-price");
        const oxinoxjsonRes = await oxinoxres.json()
        this.selectCoinPrice = oxinoxjsonRes['price'];
      }else{
        this.selectCoinPrice = 1;
      }
      // This method is called when currency changes
      // selectedCurrency is automatically updated via v-model
    },
    async submit() {
      if (!this.selectedCurrency || !this.selectedNetwork) {
        alert('Missing required fields')
        return
      }
     
      try {
        const payload = {
          amount: Number(this.amount),
          currency: this.selectedCurrency,
          network: this.selectedNetwork,
        }

        const { data } = await axios.post('/api/deposit/create', payload)

        if(this.selectedPaymentMethod == 'Dapp'){
          this.payWithWallet();
          return
        }
        // Navigate to deposits create page after successful creation
        if (this.$router && typeof this.$router.push === 'function') {
          this.$router.push('/user/account/deposits/create')
        } else {
          window.location.href = '/user/account/deposits/create'
        }
        this.show = false
        this.amount = null
        this.selectedCurrency = null
        this.selectedNetwork = null
      } catch (error) {
        console.error('Deposit request failed:', error)
      }
    },
    // async payWithWallet(){
    //   const contractAddress = {
    //     "OC_Polygon" :"0x6eA4BaBF46AfC7895ee20594b86fDcF74526c3ec",
    //     "OXINOX_Polygon" :"0xf21DF2c7E67542151620Cded82C93F8A3f77dF7C",
    //     "USDT_Polygon":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    //     "USDT_Eth":"0xdAC17F958D2ee523a2206206994597C13D831ec7",
    //     "USDT_Bsc":"0x55d398326f99059fF775485246999027B3197955",
    //     "USDT_Tron":"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    //   }

    // }
    async payWithWallet() {
      try {
        if (!window.ethereum) {
          alert("Please install MetaMask or Wallet extension!");
          return;
        }

        if (!this.selectedCurrency || !this.selectedNetwork || !this.amount) {
          alert("Missing required fields");
          return;
        }

        const contractAddress = {
          "OC_Polygon": "0x6eA4BaBF46AfC7895ee20594b86fDcF74526c3ec",
          "OXINOX_Polygon": "0xf21DF2c7E67542151620Cded82C93F8A3f77dF7C",
          "USDT_Polygon": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
          "USDT_Eth": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "USDT_Bsc": "0x55d398326f99059fF775485246999027B3197955",
          "USDT_Tron": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", // Tron alag handle karvo
        };

        const key = `${this.selectedCurrency}_${this.selectedNetwork}`;
        const tokenAddress = contractAddress[key];
        if (!tokenAddress) {
          alert("Invalid token / network selection");
          return;
        }

        // ERC20 ABI (only transfer)
        const ERC20_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"isTrue","type":"bool"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        // Connect wallet
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Load contract
        console.log(tokenAddress,">>>>>>>>>>>tokenAddress")
        const token = new ethers.Contract(tokenAddress, ERC20_ABI, signer);

        // Get decimals
        const decimals = await token.decimals();

        // Convert amount
        const amountInWei = ethers.parseUnits(this.amount.toString(), decimals);

        const { data } = await axios.get('/api/deposit/data', {})
        const depositData = data.data
        let depositWallet ;
         if(depositData.chain == 'Tron'){

          depositWallet = depositData.trc_address
        }else{

          depositWallet = depositData.evm_address
        }
        console.log(depositWallet,">>>>>>>>>>>>>>depositWallet")

        const tx = await token.transfer(depositWallet, amountInWei);
        console.log("Transaction sent:", tx.hash);

        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt);

        alert("Deposit successful!");
        this.close();
      } catch (err) {
        const { data } = await axios.post('/api/deposit/cancel')
        // window.location.href = '/user/account/deposits'
        console.error("Wallet transfer failed:", err);
        alert("Transfer failed, check console");
      }
    }

  },
}
</script>

<style lang="scss">
.small-input {
  font-size: 14px;
  height: 36px;
  min-height: 36px;
  .v-label{
    font-size: 14px;
  }
}
</style>