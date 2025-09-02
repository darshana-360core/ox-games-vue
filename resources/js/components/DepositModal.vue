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
                    :label="$t('Deposit Amount')"
                    name="amount"
                    type="number"
                    outlined
                    dense
                    class="small-input"
                />
                <v-btn density="default" class="primary w-full mt-6" color="primary" @click="submit">Deposit</v-btn>
                <v-btn density="default" class=" w-full mt-2" color="" @click="close">Cancel</v-btn>
                <!-- <v-card-actions>
                    <v-btn text @click="close">Cancel</v-btn>
                    <v-spacer />
                </v-card-actions> -->
            </v-form>
        </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      amount: null,
      selectedCurrency: null,
      selectedNetwork: null,
      items: [
        { name: 'OC', icon: require('/images/icons/usdt.png'),networks:["Polygon"] },
        { name: 'USDT', icon: require('/images/icons/usdt.png'),networks:["Polygon","ETH","BSC","TRON"] },
        // { name: 'INOX', icon: require('/images/icons/usdt.png'),networks:["Polygon"] }
      ],
      networks : {
        OC: ["Polygon"],
        USDT: ["Polygon","ETH","BSC","TRON"],
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
    open() {
      this.show = true
    },
      close() {
       this.show = false
       this.amount = null
       this.selectedCurrency = null
       this.selectedNetwork = null
     },
     onCurrencyChange(currency) {
      this.selectedCurrency = currency
      // This method is called when currency changes
      // selectedCurrency is automatically updated via v-model
    },
    onNetworkChange(network) {
      this.selectedNetwork = network
      // This method is called when currency changes
      // selectedCurrency is automatically updated via v-model
    },
    submit() {
      // Handle deposit logic here
      console.log('Depositing:', this.amount)
      console.log('Depositing:', this.amount)
    //   this.close()
    },
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