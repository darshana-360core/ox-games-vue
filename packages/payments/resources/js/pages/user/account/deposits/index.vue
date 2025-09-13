<template>
  <v-container>
    <data-table
      :title="$t('Deposits')"
      api="/api/deposits"
      :headers="headers"
      :filters="['period', 'deposit-withdrawal-status']"
    >
      <template v-slot:table-prepend>
        <v-btn color="primary" class="mb-5"  v-on="on" @click="triggerDeposit" >
          {{ $t('Make a deposit') }}
        </v-btn>
      </template>
      <template v-slot:item.status_title="{ item }">
        <span :class="{ 'green--text': item.is_completed, 'error--text': item.is_cancelled }">
          <!-- {{ item.status_title }} -->
          {{ item.status_title === 'Created' ? 'Processing' : item.status_title }}
        </span>
      </template>
      <template v-slot:item.external_id="{ item }">
       
        <template v-if="item?.external_id?.length">
          <template v-if="item?.payment_network === 'Polygon'">
          <a :href="`https://polygonscan.com/tx/${item.external_id}`" target="_blank">
            View Txn Hash
          </a>
          </template>
          <template v-else-if="item?.payment_network === 'Eth'">
          <a :href="`https://etherscan.io/tx/${item.external_id}`" target="_blank">
            View Txn Hash
          </a>
          </template>
           <template v-else-if="item?.payment_network === 'Tron'">
          <a :href="`https://tronscan.org/#/transaction/${item.external_id}`" target="_blank">
            View Txn Hash
          </a>
          </template>
          <template v-else-if="item?.payment_network === 'Bsc'">
          <a :href="`https://bscscan.com/tx/${item.external_id}`" target="_blank">
            View Txn Hash
          </a>
          </template>
          <template v-else>
          <a :href="`https://polygonscan.com/tx/${item.external_id}`" target="_blank">
            View Txn Hash
          </a>
          </template>
        </template>
        <template v-else>
          -
        </template>
      </template>
    </data-table>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable'
import axios from 'axios'
export default {
  components: { DataTable },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.query.status) {
        if (to.query.status === 'complete') {
          vm.$store.dispatch('message/success', { text: vm.$t('Deposit is successfully completed') })
        } else if (to.query.status === 'pending') {
          vm.$store.dispatch('message/warning', { text: vm.$t('Deposit is pending payment') })
        } else if (to.query.status === 'cancel') {
          vm.$store.dispatch('message/success', { text: vm.$t('Deposit is cancelled') })
        } else if (to.query.status === 'error') {
          vm.$store.dispatch('message/error', { text: vm.$t('There was an error while processing the deposit.') })
        }
        vm.$router.replace({ name: 'user.account.deposits.index' })
      }
    })
  },

  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    return { title: this.$t('Deposits') }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('Method'), value: 'method.name', sortable: false },
        // { text: this.$t('Amount'), value: 'payment_amount', align: 'left', format: 'float' },
        { text: this.$t('Currency'), value: 'payment_currency', align: 'left' },
        { text: this.$t('Network'), value: 'payment_network', align: 'left', class:"capitalize" },
        { text: this.$t('Credits'), value: 'amount', format: 'integer', align: 'left' },
        { text: this.$t('Status'), value: 'status_title', align: 'left', sortable: false },
        { text: this.$t('Transaction Hash'), value: 'external_id', align: 'left', sortable: false },  // New column
        { text: this.$t('Created at'), value: 'created_at', align: 'right' }
      ]
    }
  },

  created () {
    this.$store.dispatch('auth/fetchUser')
  },
  methods: {
    async triggerDeposit() {
      const { data } = await axios.get('/api/deposit', {})
      if(data.success != true){
          this.$root.$emit('open-deposit-modal')
      }else{
       window.location.href = '/user/account/deposits/create'
      }
    }
  },
}
</script>
