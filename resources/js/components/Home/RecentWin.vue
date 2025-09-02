<template>
  <v-container class="home-recent-big-games my-0">
    <h3 class="text-base font-semibold mb-1">Recent Big Wins</h3>
    <div class="carousel-wrapper overflow-hidden w-full bg-white bg-opacity-5 py-3 px-0 rounded-md" v-if="winnersOnly.length">
      <div class="carousel-track">
        <div
          v-for="(game, index) in repeatedGames"
          :key="index"
          class="carousel-item cursor-pointer"
          @click="openModal(game)"
        >
          <img :src="game.image" class="object-cover w-16 h-20 rounded-lg" />
          <div class="flex items-center justify-center gap-1 mt-1.5">
            <img :src="game.userAvatarURL" class="w-3 h-3 rounded-full" alt="">
            <div class="game-name text-xs leading-none ellipsis">{{ game.username }}</div>
          </div>
          <!-- <div class="game-name">{{ game.title }}</div> -->
          <div class="game-amount text-xs leading-none font-bold text-green-500 mt-1.5">{{ game.amount }}</div>
          <!-- <v-btn
              small
              :to="{ name: 'history.games.show', params: { id: game.id } }"
              class="white--text"
            >
              {{ $t('View') }}
          </v-btn> -->
        </div>
        <div
          v-for="(game, index) in repeatedGames"
          :key="index"
          class="carousel-item cursor-pointer"
          @click="openModal(game)"
        >
          <img :src="game.image" class="object-cover w-16 h-20 rounded-lg" />
          <div class="flex items-center justify-center gap-1 mt-1.5">
            <img :src="game.userAvatarURL" class="w-3 h-3 rounded-full" alt="">
            <div class="game-name text-xs leading-none ellipsis">{{ game.username }}</div>
          </div>
          <!-- <div class="game-name">{{ game.title }}</div> -->
          <div class="game-amount text-xs leading-none font-bold text-green-500 mt-1.5">{{ game.amount }}</div>
          <!-- <v-btn
              small
              :to="{ name: 'history.games.show', params: { id: game.id } }"
              class="white--text"
            >
              {{ $t('View') }}
          </v-btn> -->
        </div>
      </div>
    </div>
    <!-- ✅ Single Reusable Modal -->
    <v-dialog v-model="dialog" max-width="400">
      <div class="game-frame-2" v-if="selectedGame">
        <div class="d-flex items-center justify-center relative mb-4">
          <h4 class="font-base text-center">Bet Slip</h4>
          <!-- <v-spacer /> -->
          <button class="close-btn w-9 h-7 bg-white bg-opacity-5 hover:bg-primary-base flex items-center justify-center rounded-lg absolute top-0 right-0" @click="dialog = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- <v-card-title class="headline">
          {{ selectedGame.title }}
        </v-card-title> -->
        <div class="bet-details bg-white bg-opacity-5 rounded-2xl p-4">
          <!-- <v-img
            :src="selectedGame.image"
            width="100%"
            height="160"
            class="mb-3"
          /> -->
          <h3 class="text-sm text-center mb-2">Profit</h3>
          <div class="text-3xl text-center font-extrabold text-primary-base mb-4">{{ selectedGame.amount }}</div>
          <div class="inner-card d-flex items-center justify-between bg-neutral-800 bg-opacity-40 rounded-xl p-3 mb-4">
            <div class="text-center flex flex-col items-center">
              <strong class="text-xs opacity-80">Bet Amount</strong>
              <span class="text-sm font-semibold">${{ selectedGame.bet }}</span>
            </div>
            <div class="text-center flex flex-col items-center">
              <strong class="text-xs opacity-80">Payout</strong>
              <span class="text-sm font-semibold" v-if="selectedGame && selectedGame.win && selectedGame.bet && Number(selectedGame.bet) > 0">
                {{ (Number(selectedGame.win) / Number(selectedGame.bet)).toFixed(2) }}x
              </span>
              <span v-else>
                0.00x
              </span>
            </div>
          </div>
          <div class="flex items-center gap-3 mb-4">
            <div class="win-user-avatar w-10 h-10 rounded-full overflow-hidden">
              <img :src="selectedGame.userAvatarURL" class="w-full h-full object-cover" alt="">
            </div>
            <div class="text-sm font-semibold">
              <div class="flex flex-col gap-1">
                <span class="leading-none">{{ selectedGame.username }}</span>
                <span class="opacity-80 leading-none">{{ selectedGame.updated_at }}</span>
              </div>
              <!-- <div></div> -->
            </div>
          </div>
          <div class="flex items-center justify-between gap-3 bg-neutral-800 bg-opacity-40 rounded-lg p-3">
            <img :src="selectedGame.image" alt="" class="w-12 h-12 rounded">
            <div class="flex-1">{{ selectedGame.title }}</div>
            <a href="javascript:void(0);" class="text-sm inline-flex items-center !text-white hover:!text-primary-base">
              <span>Play Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
          <!-- <span>{{ selectedGame.name }}</span>
          <p><strong>Win:</strong> {{ selectedGame.amount }}</p> -->
        </div>
      </div>
    </v-dialog>
  </v-container>
</template>

  
  
<script>
import axios from 'axios'
import { decimal } from '~/plugins/format' // your existing decimal helper

export default {
  data() {
    return {
      recentGames: [],
      dialog: false,
      selectedGame: null
    }
  },

  computed: {
    winnersOnly() {
      return this.recentGames
        ?.filter(item => item.win > 0)
        .map(item => ({
          id: item.id,
          username: item.account.user.name,
          title: item.title,
          amount: `$${item.win > 999 ? decimal(item.win) : item.win}`,
          bet: item.bet,
          win: item.win,
          image: item.image,
          userAvatarURL: item.account.user.avatar_url,
          updated_at: item.updated_at,
        }))
    },
    repeatedGames() {
      return [...this.winnersOnly, ...this.winnersOnly, ...this.winnersOnly]
    }
  },

  methods: {
    async mounted () {
      const { data } = await axios.get('/api/pub/games/recent')
      this.recentGames = data
    },
    openModal (game) {
      this.selectedGame = game
      this.dialog = true
    }
  },

  async mounted() {
    const { data } = await axios.get('/api/pub/games/recent')
    this.recentGames = data
    console.log('ewrwr',data)
  }
}
</script>
