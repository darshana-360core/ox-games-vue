<template>
  <v-dialog v-model="infoModal" width="600" class="overflow-hidden">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>
          {{ $t('History') }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="infoModal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="min-w-full overflow-x-auto bg-gray-900 text-white">
        <table class="min-w-full border border-gray-700">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b border-gray-700">ID</th>
              <th class="py-2 px-4 border-b border-gray-700">Bets</th>
              <th class="py-2 px-4 border-b border-gray-700">Winning No</th>
              <th class="py-2 px-4 border-b border-gray-700">Profit</th>
              <th class="py-2 px-4 border-b border-gray-700">Transaction Hash</th>
              <th class="py-2 px-4 border-b border-gray-700">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableData" :key="row.id">
              <td class="py-2 px-4 border-b border-gray-800">{{ row.id }}</td>
              <td class="py-2 px-4 border-b border-gray-800">{{ row.bets }}</td>
              <td class="py-2 px-4 border-b border-gray-800">{{ row.winingNo }}</td>
              <td class="py-2 px-4 border-b border-gray-800">{{ row.profit }}</td>
              <td class="py-2 px-4 border-b border-gray-800">{{ row.transactionHash }}</td>
              <td class="py-2 px-4 border-b border-gray-800">{{ row.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      infoModal: false,
      tableData: [
        { id: 1, bets: "Bet 1", winingNo: 7, profit: "$100", transactionHash: "0xABC...", time: "12:30 PM" },
        { id: 2, bets: "Bet 2", winingNo: 5, profit: "$50", transactionHash: "0xDEF...", time: "1:00 PM" },
        // Add more demo rows as necessary
      ]
    }
  },
  methods: {
    open() {
      this.infoModal = true;
    },
    close() {
      this.infoModal = false;
    }
  }
}
</script>