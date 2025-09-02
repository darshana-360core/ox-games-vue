<template>
  <v-form ref="form" v-model="formIsValid" @submit.prevent="play" class="text-center pb-0 width-100">
    <!-- rounded-b-0 -->
    <div class="game-frame-2 d-inline-block">
      <div v-if="autoPlaySupport" class="d-flex justify-center mb-3">
        <v-btn-toggle
          v-model="autoPlayEnabled"
          active-class="primary--text"
          mandatory
          rounded
          group
          class="align-self-center"
        >
          <v-btn
            :disabled="playing || autoPlayInProgress"
            class="mx-1"
            small
            :value="false"
          >
            {{ $t('Manual') }}
          </v-btn>
          <v-btn
            :disabled="playing || autoPlayInProgress"
            class="mx-1"
            small
            :value="true"
          >
            {{ $t('Auto') }}
          </v-btn>
        </v-btn-toggle>
        <v-dialog
          v-model="autoPlaySettingsDialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="primary"
              :disabled="!autoPlayEnabled || playing || autoPlayInProgress"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline my-5">
              {{ $t('Auto play settings') }}
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model.number="autoPlay.onLoss.amount"
                dense
                outlined
                class="text-center"
                :label="$t('On loss')"
                :rules="[validationInteger]"
                :readonly="autoPlay.onLoss.reset"
                :suffix="$t('credits')"
              >
                <template v-slot:prepend-inner>
                  <v-btn-toggle
                    v-model="autoPlay.onLoss.reset"
                    active-class="primary--text"
                    mandatory
                    rounded
                    group
                    class="align-self-center"
                  >
                    <v-btn :value="true" small>
                      {{ $t('Reset to base') }}
                    </v-btn>
                    <v-btn :value="false" small>
                      {{ $t('Change by') }}
                    </v-btn>
                  </v-btn-toggle>
                </template>
              </v-text-field>
              <v-text-field
                v-model.number="autoPlay.onWin.amount"
                dense
                outlined
                class="text-center"
                :label="$t('On win')"
                :rules="[validationInteger]"
                :readonly="autoPlay.onWin.reset"
                :suffix="$t('credits')"
              >
                <template v-slot:prepend-inner>
                  <v-btn-toggle
                    v-model="autoPlay.onWin.reset"
                    active-class="primary--text"
                    mandatory
                    rounded
                    group
                    class="align-self-center"
                  >
                    <v-btn :value="true" small>
                      {{ $t('Reset to base') }}
                    </v-btn>
                    <v-btn :value="false" small>
                      {{ $t('Change by') }}
                    </v-btn>
                  </v-btn-toggle>
                </template>
              </v-text-field>
              <v-text-field
                v-model.number="autoPlay.maxBetsCount"
                dense
                outlined
                class="text-center"
                :label="$t('Number of games')"
                :rules="[validationNonNegativeInteger]"
              />
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model.number="autoPlay.minBet"
                    dense
                    outlined
                    class="text-center"
                    :label="$t('Min bet')"
                    :suffix="$t('credits')"
                    :rules="[validationNonNegativeInteger]"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model.number="autoPlay.maxBet"
                    dense
                    outlined
                    class="text-center"
                    :label="$t('Max bet')"
                    :suffix="$t('credits')"
                    :rules="[validationNonNegativeInteger]"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model.number="autoPlay.minBalance"
                    dense
                    outlined
                    :prefix="$t('less than')"
                    class="text-center"
                    :label="$t('Stop if balance is')"
                    :rules="[validationNonNegativeInteger]"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model.number="autoPlay.maxBalance"
                    dense
                    outlined
                    :prefix="$t('greater than')"
                    class="text-center"
                    :label="$t('Stop if balance is')"
                    :rules="[validationNonNegativeInteger]"
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="autoPlaySettingsDialog = false"
              >
                {{ $t('Apply') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-model="autoPlayHistoryDialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="primary"
              :disabled="!autoPlayEnabled || playing || autoPlayInProgress"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-poll</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline my-5">
              {{ $t('Auto play history') }}
            </v-card-title>
            <v-card-text>
              <v-simple-table v-if="autoPlay.games.length" dense fixed-header>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        #
                      </th>
                      <th class="text-right">
                        {{ $t('Bet') }}
                      </th>
                      <th class="text-right">
                        {{ $t('Win') }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(game, i) in autoPlay.games" :key="i">
                      <td class="text-left">
                        {{ ++i }}
                      </td>
                      <td class="text-right">
                        {{ game.bet }}
                      </td>
                      <td class="text-right">
                        {{ game.win }}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="2" class="text-right">
                        {{ $t('Total net win') }}
                      </th>
                      <th class="text-right" :class="autoPlayNetResult > 0 ? 'green--text' : 'error--text'">
                        {{ autoPlayNetResult.toFixed(2) }}
                      </th>
                    </tr>
                  </tfoot>
                </template>
              </v-simple-table>
              <p v-else>
                {{ $t('No games played in the auto mode.') }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="autoPlayHistoryDialog = false"
              >
                {{ $t('Close') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="d-flex justify-center flex-wrap items-center mt-3">
        <!-- <slot name="before-bet-input" /> -->
        <v-text-field
          v-model.number="bet"
          density="comfortable"
          outlined
          :dense="$vuetify.breakpoint.smAndDown"
          :full-width="false"
          class="bet-input text-center"
          :label="betLabel || $t('Bet')"
          :disabled="playing"
          :rules="[validationInteger, v => validationMin(v, minBet), v => typeof account !== 'undefined' && validationMax(v, Math.min(Math.floor(account.balance), maxBet))]"
          prepend-inner-icon="mdi-minus"
          append-icon="mdi-plus"
          @click:prepend-inner="decreaseBet"
          @click:append="increaseBet"
        >
          <template v-slot:prepend-inner>
            <v-btn small text icon color="primary" @click="bet = minBet">
              <v-icon small>
                mdi-arrow-down
              </v-icon>
            </v-btn>
            <v-btn small text icon color="primary" @click="decreaseBet">
              <v-icon small>
                mdi-minus
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:append>
            <v-btn small text icon color="primary" @click="increaseBet">
              <v-icon small>
                mdi-plus
              </v-icon>
            </v-btn>
            <v-btn small text icon color="primary" @click="bet = maxBet">
              <v-icon small>
                mdi-arrow-up
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <!-- <slot name="after-bet-input" /> -->
        <v-btn
          v-if="autoPlayEnabled"
          :disabled="!autoPlayInProgress"
          class="ml-2 play-button"
          outlined
          icon
          tile
          @click="stopAutoPlay"
          >
          <!-- color="primary" -->
          <!-- <v-icon>mdi-stop</v-icon> -->
          <div class="wrap">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" width="30" height="30">
                <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clip-rule="evenodd" />
              </svg>
            </p>
          </div>
        </v-btn>

        <!-- <button class="button">
          <div class="wrap">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" width="24" height="24">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            </p>
          </div>
        </button> -->

        <v-btn
          type="submit"
          :loading="loading"
          :disabled="disabled || !formIsValid || isPlayDisabled || autoPlayInProgress"
          class="ml-3 play-button"
          >
          <!-- color="primary" -->
          <!-- size="x-large" -->
          <!-- {{ playLabel || $t('Place Bet') }} -->
          <!-- <v-icon>mdi-play</v-icon> -->
          <div class="wrap">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" width="30" height="30">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
            </p>
          </div>
        </v-btn>
        <!-- <v-btn size="x-large">
          <v-icon>mdi-play</v-icon>
        </v-btn> -->
        <slot name="after-play-button" />
      </div>
    </div>
  </v-form>
  <!-- <v-row justify="center" style="width: 100%;">
    <v-col cols="10" md="6" lg="12" class="text-center">
    </v-col>
  </v-row> -->
</template>

<script>
import { mapState } from 'vuex'
import { get, isInteger } from '~/plugins/utils'
import FormMixin from '~/mixins/Form'
import GameMixin from '~/mixins/Game'
import SoundMixin from '~/mixins/Sound'
import clickSound from '~/../audio/common/click.wav'

export default {
  mixins: [FormMixin, GameMixin, SoundMixin],

  props: {
    betLabel: {
      type: String,
      required: false,
      default: ''
    },
    playLabel: {
      type: String,
      required: false,
      default: ''
    },
    loading: {
      type: Boolean,
      required: true
    },
    playing: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    provable: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data () {
    return {
      bet: null,
      autoPlay: {
        baseBet: 0,
        onWin: {
          reset: true,
          amount: 0
        },
        onLoss: {
          reset: true,
          amount: 0
        },
        games: [],
        minBet: 0,
        maxBet: 0,
        betsCount: 0,
        maxBetsCount: 0,
        maxBalance: 0,
        minBalance: 0,
        winsCount: 0,
        lossesCount: 0
      },
      autoPlayInProgress: false,
      autoPlayEnabled: false,
      autoPlaySettingsDialog: false,
      autoPlayHistoryDialog: false
    }
  },

  computed: {
    ...mapState('auth', ['account']),
    defaultBet () {
      return parseInt(this.config.default_bet_amount, 10)
    },
    minBet () {
      return parseInt(this.config.min_bet, 10)
    },
    maxBet () {
      return parseInt(this.config.max_bet, 10)
    },
    betStep () {
      return parseInt(this.config.bet_change_amount, 10)
    },
    autoPlaySupport () {
      return get(this.config, 'auto_play.enabled', false)
    },
    autoPlayInterval () {
      return get(this.config, 'auto_play.interval')
    },
    isPlayDisabled () {
      return (this.provable && !this.provablyFairGame.hash) || this.playing || typeof this.account === 'undefined' || this.bet > this.account.balance
    },
    autoPlayNetResult () {
      return this.autoPlay.games.reduce((a, game) => a + game.win - game.bet, 0)
    },
    isMobile() {
      return window.innerWidth <= 768;
    }
  },

  watch: {
    bet (bet, oldBet) {
      this.$emit('bet-change', isInteger(bet) ? bet : 0)
    }
  },

  created () {
    // it's important to wait until next tick to ensure config computed property is updated
    // after switching from one game page to another.
    this.$nextTick(() => {
      this.bet = this.defaultBet
    })
  },

  methods: {
    play () {
      this.sound(clickSound)

      if (this.autoPlaySupport && this.autoPlayEnabled && !this.autoPlayInProgress) {
        this.autoPlayInProgress = true
        this.autoPlay.baseBet = this.bet
        this.autoPlay.betsCount = 0
        this.autoPlay.winsCount = 0
        this.autoPlay.lossesCount = 0
        this.autoPlay.games = []
      }

      this.$emit('play', this.bet, this.autoPlayInProgress)
    },
    decreaseBet () {
      this.sound(clickSound)
      const bet = this.bet - this.betStep
      this.bet = Math.max(this.minBet, bet)
    },
    increaseBet () {
      this.sound(clickSound)
      const bet = this.bet + this.betStep
      this.bet = Math.min(this.maxBet, bet)
    },
    onGameCompleted (game) {
      if (this.autoPlayEnabled) {
        const isWin = game.win > game.bet
        this.autoPlay.betsCount++
        this.autoPlay.games.push({ bet: game.bet, win: game.win })

        // win
        if (isWin) {
          this.autoPlay.winsCount++

          if (this.autoPlay.onWin.reset) {
            this.setBet(this.autoPlay.baseBet)
          } else {
            this.setBet(this.bet + this.autoPlay.onWin.amount)
          }
          // loss
        } else {
          this.autoPlay.lossesCount++

          if (this.autoPlay.onLoss.reset) {
            this.setBet(this.autoPlay.baseBet)
          } else {
            this.setBet(this.bet + this.autoPlay.onLoss.amount)
          }
        }

        if (this.bet > this.account.balance ||
          (this.autoPlay.minBalance > 0 && this.account.balance < this.autoPlay.minBalance) ||
          (this.autoPlay.maxBalance > 0 && this.account.balance > this.autoPlay.maxBalance) ||
          (this.autoPlay.maxBetsCount > 0 && this.autoPlay.betsCount >= this.autoPlay.maxBetsCount)) {
          this.stopAutoPlay()
        }

        setTimeout(() => {
          if (this.autoPlayInProgress) {
            this.play()
          } else {
            this.stopAutoPlay()
          }
        }, parseInt(this.autoPlayInterval) * 1000)
      }
    },
    setBet (value) {
      const minValues = this.autoPlay.maxBet > 0
        ? [value, this.maxBet, this.autoPlay.maxBet]
        : [value, this.maxBet]
      const maxValues = this.autoPlay.minBet > 0
        ? [this.minBet, this.autoPlay.minBet]
        : [this.minBet]
      this.bet = Math.max(...[Math.min(...minValues), ...maxValues])
    },
    stopAutoPlay () {
      this.autoPlayInProgress = false
    }
  }
}
</script>
<style lang="scss" scoped>
.bet-input {
  max-width: 250px;
}
.play-btn{
  min-width: 56px !important;
  width: 56px !important;
  height: 56px !important;
  border-radius: 100%;
}
</style>
