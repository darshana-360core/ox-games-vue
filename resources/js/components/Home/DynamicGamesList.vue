<template>
  <div v-if="games.length" :class="classes">
    <!-- <v-row>
      <v-col>
      </v-col>
    </v-row> -->
    <div class="d-flex align-center gap-3 mb-2 md:mb-4">
      <div class="title-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M10.1309 15.0099L9.10094 13.9799L10.0909 12.9899C10.3809 12.6999 10.3809 12.2199 10.0909 11.9299C9.80094 11.6399 9.32094 11.6399 9.03094 11.9299L8.04094 12.9199L7.08094 11.9599C6.79094 11.6699 6.31094 11.6699 6.02094 11.9599C5.73094 12.2499 5.73094 12.7299 6.02094 13.0199L6.98094 13.9799L5.99094 14.9699C5.70094 15.2599 5.70094 15.7399 5.99094 16.0299C6.14094 16.1799 6.33094 16.2499 6.52094 16.2499C6.71094 16.2499 6.90094 16.1799 7.05094 16.0299L8.04094 15.0399L9.07094 16.0699C9.22094 16.2199 9.41094 16.2899 9.60094 16.2899C9.79094 16.2899 9.98094 16.2199 10.1309 16.0699C10.4209 15.7799 10.4209 15.2999 10.1309 15.0099Z" fill="currentColor" fill-opacity="0.5"/>
          <path d="M13.5393 15C12.9893 15 12.5293 14.55 12.5293 14C12.5293 13.45 12.9693 13 13.5193 13H13.5393C14.0893 13 14.5393 13.45 14.5393 14C14.5393 14.55 14.0993 15 13.5393 15Z" fill="currentColor" fill-opacity="0.5"/>
          <path d="M17.4807 15C16.9307 15 16.4707 14.55 16.4707 14C16.4707 13.45 16.9107 13 17.4607 13H17.4807C18.0307 13 18.4807 13.45 18.4807 14C18.4807 14.55 18.0407 15 17.4807 15Z" fill="currentColor" fill-opacity="0.5"/>
          <path d="M15.5 16.97C14.95 16.97 14.5 16.53 14.5 15.98V15.96C14.5 15.41 14.95 14.96 15.5 14.96C16.05 14.96 16.5 15.41 16.5 15.96C16.5 16.51 16.06 16.97 15.5 16.97Z" fill="currentColor" fill-opacity="0.5"/>
          <path d="M15.5 13.03C14.95 13.03 14.5 12.59 14.5 12.04V12.02C14.5 11.47 14.95 11.02 15.5 11.02C16.05 11.02 16.5 11.47 16.5 12.02C16.5 12.57 16.06 13.03 15.5 13.03Z" fill="currentColor" fill-opacity="0.5"/>
          <path opacity="0.4" d="M22 11.07V16.65C22 19.6 19.6 22 16.65 22H7.35C4.4 22 2 19.6 2 16.65V11.07C2 8.11997 4.4 5.71997 7.35 5.71997H16.65C19.6 5.71997 22 8.11997 22 11.07Z" fill="currentColor" fill-opacity="1"/>
          <path d="M13.6394 2.71L13.6294 3.65C13.6194 4.53 12.8894 5.26 11.9994 5.26C11.8494 5.26 11.7594 5.36 11.7594 5.49C11.7594 5.62 11.8594 5.72 11.9894 5.72H10.3794C10.3694 5.65 10.3594 5.57 10.3594 5.49C10.3594 4.59 11.0894 3.86 11.9794 3.86C12.1294 3.86 12.2294 3.76 12.2294 3.63L12.2394 2.69C12.2494 2.31 12.5594 2 12.9394 2H12.9494C13.3394 2 13.6394 2.32 13.6394 2.71Z" fill="currentColor" fill-opacity="0.6"/>
        </svg>
      </div>
      <h3 class="text-h5 text-sm-h5 font-weight-medium">
        {{ title }}
      </h3>
    </div>

    <v-row v-if="filter && categories.length > 1">
      <v-col>
        <v-chip-group
          v-model="category"
          active-class="primary"
          mandatory
        >
          <v-chip label active @click="filterByCategory()">
            {{ $t('All') }}
          </v-chip>
          <v-chip v-for="cat in categories" :key="cat" label @click="filterByCategory(cat)">
            {{ cat }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <v-row v-if="search" justify="center">
      <v-col md="6" lg="3">
        <v-text-field
          v-model="input"
          :label="$t('Search')"
          solo
          clearable
          rounded
          dense
          prepend-inner-icon="mdi-magnify"
        />
      </v-col>
    </v-row>

    <div v-if="gamesList.length && !isMobile" ref="games" justify="start" class="game-card-grid">
      <v-col
        v-for="(game, i) in gamesList"
        :key="i"
        class="game-card"
        :class="cardClasses"
        :data-name="game.name"
        :data-groups="JSON.stringify([game.category])"
      >
        <component :is="`game-${displayStyle}`" :game="game" class="mx-auto" :class="`display-style-${displayStyle}`" />
      </v-col>
      <v-col class="game-card" :class="cardClasses">
        <v-hover v-slot="{ hover }">
          <v-card class="display-style-card" :elevation="hover ? 12 : 2">
            <router-link to="markets/crypto-prediction">
              <img
                src="/images/games/crypto-prediction/thumb.jpg"
                class="game-banner align-center text-center"
                :class="{ hover }"
              >
            </router-link>
            <v-card-title class="text-no-wrap">Crypto Prediction</v-card-title>
            <v-btn
              fab
              color="primary"
              class="play-button"
              :class="{ hover }"
            >
              <v-icon color="grey lighten-5">
                mdi-play
              </v-icon>
            </v-btn>
            <template #placeholder>
              <v-skeleton-loader type="image" />
            </template>
          </v-card>
        </v-hover>
      </v-col>
    </div>

    <v-row v-else-if="!isMobile">
      <v-col v-for="(v,i) in Array(count).fill(0)" :key="i">
        <v-skeleton-loader type="card" />
      </v-col>
    </v-row>
    <v-row v-if="count > 0 && count < games.length" class="my-4">
      <v-col class="text-center py-0">
        <v-btn color="primary" large @click="loadMore">
          <v-icon left>
            mdi-autorenew
          </v-icon>
          {{ $t('Load more') }}
        </v-btn>
      </v-col>
    </v-row>

    <VueSlickCarousel
      v-if="isMobile && gamesList.length"
      :arrows="true"
      :dots="false"
      :infinite="true"
      :slidesToShow="3"
      :slidesToScroll="1"
      class="game-card mobile-slider -mx-1"
      :class="cardClasses"
      :autoplay="true"
      :autoplaySpeed="3000"
    >
      <div v-for="(game, i) in gamesList" :key="i" class="slide px-1">
        <component :is="`game-${displayStyle}`" :game="game" class="mx-auto" :class="`display-style-${displayStyle}`" />
      </div>
      <div class="slide px-1">
        <div class="game-card">
          <v-hover>
            <v-card class="display-style-card">
              <router-link to="markets/crypto-prediction">
                <img
                  src="/images/games/crypto-prediction/thumb.jpg"
                  class="game-banner align-center text-center"
                  :class="{ hover }"
                >
              </router-link>
              <v-card-title class="text-no-wrap">Crypto Prediction</v-card-title>
              <v-btn
                fab
                color="primary"
                class="play-button"
                :class="{ hover }"
              >
                <v-icon color="grey lighten-5">
                  mdi-play
                </v-icon>
              </v-btn>
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-card>
          </v-hover>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import GameCard from '~/components/Home/GameCard'
import GameBlock from '~/components/Home/GameBlock'
import GameBlock2 from '~/components/Home/GameBlock2'
import { unique } from '~/plugins/utils'
import Shuffle from 'shufflejs'
import { config } from '~/plugins/config'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: { GameBlock, GameCard, GameBlock2, VueSlickCarousel },

  props: {
    title: {
      type: String,
      required: true
    },
    games: {
      type: Array,
      required: true
    },
    displayStyle: {
      type: String,
      required: true
    },
    displayCount: {
      type: Number,
      required: false,
      default: 0
    },
    loadCount: {
      type: Number,
      required: false,
      default: 0
    },
    filter: {
      type: Boolean,
      required: false,
      default: false
    },
    search: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      count: this.displayCount,
      category: null,
      shuffle: null,
      input: null,
      isMobile: false
    }
  },

  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },

  computed: {
    classes () {
      return ['game-list', 'game-list-' + this.title.replace(/[^a-z]+/ig, '-').toLowerCase()]
    },
    cardClasses () {
      return config('settings.content.home.card_classes')
    },
    categories () {
      return unique(this.games.map(game => game.category)).sort()
    },
    gamesList () {
      return this.count > 0 ? this.games.slice(0, this.count) : this.games
    },
    isAthenticated () {
      return this.authenticated
    }
  },

  watch: {
    input (input) {
      this.filterByInput(input)
    }
  },

  methods: {
    initShuffle () {
      if (!this.shuffle) {
        this.shuffle = new Shuffle(this.$refs.games, { itemSelector: '.game-card' })
      }
    },
    filterByCategory (category = null) {
      this.initShuffle()

      if (category !== null) {
        this.shuffle.filter(category)
      } else {
        this.shuffle.filter()
      }
    },
    filterByInput (input = null) {

      this.initShuffle()

      if (input !== null && this.category) {
        this.category = null
      }

      if (input !== null) {
        this.shuffle.filter((element, shuffle) => {
          return element.dataset.name.toLowerCase().trim().includes(input.toLowerCase())
        })
      } else {
        this.shuffle.filter()
      }
    },
    loadMore () {
      this.count += this.loadCount
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}
</script>
<style lang="scss" scoped>
.v-chip-group::v-deep {
  .v-slide-group__content {
    justify-content: center;
  }
}
</style>
