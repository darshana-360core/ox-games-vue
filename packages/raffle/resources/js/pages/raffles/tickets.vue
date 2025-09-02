<template>
  <v-container>
    <data-table
      api="/api/raffles/tickets"
      :title="$t('Tickets')"
      :headers="headers"
      :search="true"
      :search-placeholder="$t('Raffle or ticket ID')"
      sort-by="created_ago"
    >
      <template v-slot:item.raffle="{ item: { raffle } }">
        {{ raffle.title }}
      </template>
      <template v-slot:item.ticket="{ item }">
        {{ item.code }}
        <v-chip
          v-if="item.id === item.raffle.winning_ticket_id"
          label
          outlined
          small
          color="success"
          class="ml-2"
        >
          {{ $t('Winning') }}
        </v-chip>
      </template>
    </data-table>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable'

export default {
  components: { DataTable },

  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    return { title: this.$t('Tickets') }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('Raffle'), value: 'raffle', sortable: false },
        { text: this.$t('Ticket'), value: 'ticket', sortable: false },
        { text: this.$t('Purchased'), value: 'created_ago', align: 'right' }
      ]
    }
  },

  created () {
    this.$store.dispatch('auth/fetchUser')
  }
}
</script>
