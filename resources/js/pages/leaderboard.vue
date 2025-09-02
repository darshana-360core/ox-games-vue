<template>
  <v-container>
    <data-table
      api="/api/leaderboard"
      :title="$t('Leaderboard')"
      :headers="headers"
      :filters="['period', 'game']"
      sort-by="bet_total"
    >
      <template v-slot:item.name="{ item: user }">
        <user-avatar :user="user" />
        <user-profile-modal :user="{ id: user.id, name: user.name }" />
      </template>
    </data-table>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable'
import UserProfileModal from '~/components/UserProfileModal'
import UserAvatar from '../components/UserAvatar'

export default {
  components: { UserAvatar, DataTable, UserProfileModal },

  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    return { title: this.$t('Leaderboard') }
  },

  data () {
    return {
      filters: {}
    }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('Sr No'), value: 'serial_number' },
        { text: this.$t('Player Name'), value: 'name' },
        { text: this.$t('Bets'), value: 'bet_total', format: 'integer', align: 'left' },
        { text: this.$t('Total Deposit'), value: 'total_deposit' },
        { text: this.$t('Profit'), value: 'profit_total', format: 'decimal', align: 'left' },
        // { text: this.$t('Profit'), value: 'profit_total', format: 'decimal', align: 'left' },
        { text: this.$t('Current Balance'), value: 'balance', format: 'decimal', align: 'left' }
      ]
    }
  }
}
</script>
