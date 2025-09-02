<template>
  <v-container>
    <v-alert dense outlined text color="warning" class="mt-3">
      {{ $t('Withdrawls will be processed in 24 Hours.') }}
    </v-alert>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <v-card>
        <v-card-title class="mb-0">Withdraw </v-card-title>
        <v-card-text>

          <v-select
            :label="$t('Deposit Currency')"
            outlined
            :items="items"
            item-text="name"
            item-value="name"
            class=""
        >
            <!-- Dropdown list items -->
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
  
            <!-- Selected value preview -->
            <template v-slot:selection="{ item }">
                <v-chip small outlined>
                <v-avatar left>
                    <img :src="item.icon" :alt="item.name" style="width: 18px; height: 18px;" />
                </v-avatar>
                {{ item.name }}
                </v-chip>
            </template>
          </v-select>
        </v-card-text>
      </v-card>
      <data-table
        :title="$t('Withdrawal History')"
        api="/api/withdrawals"
        :headers="headers"
        :filters="['period', 'deposit-withdrawal-status']"
      >
        <template v-slot:item.status_title="{ item }">
          <span :class="{ 'green--text': item.is_completed, 'error--text': item.is_cancelled }">
            {{ item.status_title === 'Created' ? 'Processing' : item.status_title }}
          </span>
        </template>
      </data-table>
    </div>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable'

export default {
  name: 'WithdrawalPage',

  data(){
    return {
      items: [
        { name: 'USDT', icon: require('/images/icons/usdt.png'), },
        { name: 'BTC', icon: require('/images/icons/btc.png'), },
        { name: 'ETH', icon: require('/images/icons/eth.png'), }
      ],
    }
  },

  components: { DataTable },

  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    return { title: this.$t('Withdrawals') }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('Method'), value: 'method.name', sortable: false },
        { text: this.$t('Amount'), value: 'payment_amount', align: 'right', format: 'float' },
        { text: this.$t('Currency'), value: 'payment_currency', align: 'right' },
        { text: this.$t('Credits'), value: 'amount', format: 'integer', align: 'right' },
        { text: this.$t('Status'), value: 'status_title', align: 'right', sortable: false },
        { text: this.$t('Created at'), value: 'created_at', align: 'right' }
      ]
    }
  },

  created () {
    this.$store.dispatch('auth/fetchUser')
  }
}
</script>