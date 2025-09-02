<template>
  <v-container class="home-page-search mt-4">
    <v-form @submit.prevent>
      <v-autocomplete
        v-if="gamesLoaded"
        v-model="game"
        :items="games"
        item-text="name"
        :return-object="true"
        color="primary"
        placeholder="Search..."
        prepend-inner-icon="mdi-magnify"
        hide-no-data
        hide-details
        rounded
        outlined
        class="py-0 home-search-bar"
        :menu-props="{ openOnClick: false, openOnFocus: true }"
        @change="handleGameSelect"
        @keydown.enter.prevent
        >
        <!-- :filter="() => true" -->
        <template #item="{ item }">
          <v-list-item-icon class="!my-1">
            <v-img
              :src="item.banner"
              width="40px"
              class="game-banner align-center text-center rounded-lg"
            />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="subtitle-1">{{ item.name }}</span>
            </v-list-item-title>
            <v-list-item-subtitle v-if="item.provider?.name">
              {{ item.provider.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-autocomplete>
    </v-form>
    <div class="justify-center">
      <!-- <v-img src="../../../images/game-frame-3.png" class="frame-image text-center fill-height animate-pulse"></v-img> -->
      <!-- <div md="12" class="d-flex flex-column text-center text-md-left flex-sm-row align-center justify-space-between game-frame gap-4">
        <div class="mb-3 mb-md-0">
          <h2 class="text-h4 font-weight-semibold mr-3 original-games">
            {{ $t('Let\'s play?') }}
          </h2>
          <p class="ma-0">Fair online casino games</p>
        </div>
        <game-search-modal>
          <template #default="{ on }">
            <v-btn
              rounded
              primary
              large
              v-on="on"
              class="primary"
            >
              {{ $t('Choose a game') }}
            </v-btn>
          </template>
        </game-search-modal>
      </div> -->
      <!-- <v-col md="6">
      </v-col> -->
    </div>
  </v-container>
</template>

<script>
// import GameSearchModal from '~/components/GameSearchModal'
import { mapGetters, mapActions } from 'vuex'

export default {
  // props: {
  //   active: {
  //     type: Boolean,
  //     required: false,
  //     default: false
  //   }
  // },

  // components: { GameSearchModal },
  data () {
    return {
      game: null,
      gamesLoaded: false
    }
  },
  computed: {
    ...mapGetters({
      games: 'package-manager/getGames'
    })
  },
  watch: {
    games(newGames) {
      if (newGames && newGames.length) {
        this.gamesLoaded = true
        this.$emit('change', game)
      }
    }
  },
  methods: {
    ...mapActions({
      fetchGames: 'package-manager/fetchGames' // Adjust based on your store
    }),
    handleGameSelect (game) {
      if (game?.route) {
        this.$router.push(game.route)
      }
    }
  },
  async mounted () {
    if (!this.games || !this.games.length) {
      await this.fetchGames()
    } else {
      this.gamesLoaded = true
    }
  },
  // mounted() {
  //   console.log('Games loaded:', this.games.length)
  // }
}
</script>

<style scoped>
.home-search-bar /deep/ .v-menu__content {
  background-color: #1e1e2f !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4) !important;
  padding: 8px;
}

.home-search-bar /deep/ .v-list-item:hover {
  background-color: #2a2a3d !important;
}

.home-search-bar /deep/ .v-list-item__title,
.home-search-bar /deep/ .v-list-item__subtitle {
  color: #fff !important;
}
</style>

