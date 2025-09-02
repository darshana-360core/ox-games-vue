<template>
  <v-card flat>
    <v-card-text v-if="pusherEnabled">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('General') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-combobox
              v-model="form.GAME_MULTIPLAYER_ROULETTE_CATEGORIES"
              :label="$t('Categories')"
              multiple
              outlined
              chips
              small-chips
              deletable-chips
              hide-selected
              no-filter
            />

            <file-upload
              v-model="form.GAME_MULTIPLAYER_ROULETTE_BANNER"
              :label="$t('Banner')"
              name="banner"
              :folder="`games/${packageId}`"
            />

            <file-upload
              v-model="form.GAME_MULTIPLAYER_ROULETTE_BACKGROUND"
              :label="$t('Background image')"
              name="background"
              :folder="`games/${packageId}`"
              :clearable="true"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_MIN_BET"
              :label="$t('Min bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_MULTIPLAYER_ROULETTE_MIN_BET')"
              :error-messages="form.errors.get('GAME_MULTIPLAYER_ROULETTE_MIN_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_MIN_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_MAX_BET"
              :label="$t('Max bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_MULTIPLAYER_ROULETTE_MAX_BET')"
              :error-messages="form.errors.get('GAME_MULTIPLAYER_ROULETTE_MAX_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_MAX_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT"
              :label="$t('Bet increment / decrement amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT')"
              :error-messages="form.errors.get('GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT"
              :label="$t('Default bet amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT')"
              :error-messages="form.errors.get('GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_DURATION"
              :label="$t('Betting round duration')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_MULTIPLAYER_ROULETTE_DURATION')"
              :error-messages="form.errors.get('GAME_MULTIPLAYER_ROULETTE_DURATION')"
              outlined
              :suffix="$t('seconds')"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_DURATION')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_INTERVAL"
              :label="$t('Delay before next game starts')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_MULTIPLAYER_ROULETTE_INTERVAL')"
              :error-messages="form.errors.get('GAME_MULTIPLAYER_ROULETTE_INTERVAL')"
              outlined
              :suffix="$t('seconds')"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_INTERVAL')"
            />

            <v-select
              v-model="form.GAME_MULTIPLAYER_ROULETTE_MODE"
              :items="[{ value: 'wheel', text: $t('Wheel') }, { value: 'line', text: $t('Line') }]"
              :label="$t('Default mode')"
              :error="form.errors.has('GAME_MULTIPLAYER_ROULETTE_MODE')"
              :error-messages="form.errors.get('GAME_MULTIPLAYER_ROULETTE_MODE')"
              persistent-hint
              outlined
            />

            <v-switch
              v-model="form.GAME_MULTIPLAYER_ROULETTE_BOTS_ENABLED"
              :label="$t('Enable bots')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Paytable') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.red"
              :label="$t('Red')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.red')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.black"
              :label="$t('Black')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.black')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.zero"
              :label="$t('Zero')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.zero')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.odd"
              :label="$t('Odd')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.odd')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.even"
              :label="$t('Even')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.even')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight1"
              :label="$t('1')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight1')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight2"
              :label="$t('2')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight2')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight3"
              :label="$t('3')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight3')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight4"
              :label="$t('4')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight4')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight5"
              :label="$t('5')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight5')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight6"
              :label="$t('6')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight6')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight7"
              :label="$t('7')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight7')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight8"
              :label="$t('8')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight8')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight9"
              :label="$t('9')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight9')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight10"
              :label="$t('10')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight10')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight11"
              :label="$t('11')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight11')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight12"
              :label="$t('12')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight12')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight13"
              :label="$t('13')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight13')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight14"
              :label="$t('14')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight14')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight15"
              :label="$t('15')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight15')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight16"
              :label="$t('16')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight16')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight17"
              :label="$t('17')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight17')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight18"
              :label="$t('18')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight18')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight19"
              :label="$t('19')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight19')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight20"
              :label="$t('20')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight20')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight21"
              :label="$t('21')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight21')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight22"
              :label="$t('22')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight22')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight23"
              :label="$t('23')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight23')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight24"
              :label="$t('24')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight24')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight25"
              :label="$t('25')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight25')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight26"
              :label="$t('26')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight26')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight27"
              :label="$t('27')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight27')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight28"
              :label="$t('28')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight28')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight29"
              :label="$t('29')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight29')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight30"
              :label="$t('30')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight30')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight31"
              :label="$t('31')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight31')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight32"
              :label="$t('32')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight32')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight33"
              :label="$t('33')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight33')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight34"
              :label="$t('34')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight34')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight35"
              :label="$t('35')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight35')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight36"
              :label="$t('36')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight36')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight36"
              :label="$t('1st 12')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight1st_12')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight36"
              :label="$t('2nd 12')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight2nd_12')"
            />

            <v-text-field
              v-model.number="form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.straight36"
              :label="$t('3rd 12')"
              :rules="[validationPositiveNumber]"
              outlined
              :prefix="$t('Bet') + ' x '"
              @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.straight3rd_12')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Sounds') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <file-upload
              v-model="form.GAME_MULTIPLAYER_ROULETTE_SOUNDS_WIN"
              :label="$t('Win')"
              name="win"
              :folder="`games/${packageId}`"
              accept=".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac"
              :clearable="true"
            />

            <file-upload
              v-model="form.GAME_MULTIPLAYER_ROULETTE_SOUNDS_LOSE"
              :label="$t('Lose')"
              name="lose"
              :folder="`games/${packageId}`"
              accept=".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac"
              :clearable="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-card-text v-else>
      <v-alert
        dense
        outlined
        text
        color="error"
      >
        {{ $t('This game requires Pusher.') }}
        <a href="/admin/help/app#q28">{{ $t('How to integrate Pusher?') }}</a>
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
import { config } from '~/plugins/config'
import FormMixin from '~/mixins/Form'
import FileUpload from '~/components/Admin/FileUpload'

export default {
  components: { FileUpload },
  mixins: [FormMixin],

  props: {
    packageId: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      variables: {
        GAME_MULTIPLAYER_ROULETTE_CATEGORIES: config(`${this.packageId}.categories`),
        GAME_MULTIPLAYER_ROULETTE_BANNER: config(`${this.packageId}.banner`),
        GAME_MULTIPLAYER_ROULETTE_BACKGROUND: config(`${this.packageId}.background`),
        GAME_MULTIPLAYER_ROULETTE_MIN_BET: config(`${this.packageId}.min_bet`),
        GAME_MULTIPLAYER_ROULETTE_MAX_BET: config(`${this.packageId}.max_bet`),
        GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT: config(`${this.packageId}.bet_change_amount`),
        GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT: config(`${this.packageId}.default_bet_amount`),
        GAME_MULTIPLAYER_ROULETTE_DURATION: config(`${this.packageId}.duration`),
        GAME_MULTIPLAYER_ROULETTE_INTERVAL: config(`${this.packageId}.interval`),
        GAME_MULTIPLAYER_ROULETTE_MODE: config(`${this.packageId}.mode`),
        GAME_MULTIPLAYER_ROULETTE_BOTS_ENABLED: '' + config(`${this.packageId}.bots_enabled`),
        GAME_MULTIPLAYER_ROULETTE_PAYTABLE: config(`${this.packageId}.paytable`),
        GAME_MULTIPLAYER_ROULETTE_SOUNDS_WIN: config(`${this.packageId}.sounds.win`),
        GAME_MULTIPLAYER_ROULETTE_SOUNDS_LOSE: config(`${this.packageId}.sounds.lose`)
      }
    }
  },

  computed: {
    pusherEnabled () {
      return this.form.PUSHER_APP_ID && this.form.PUSHER_APP_KEY && this.form.PUSHER_APP_SECRET && this.form.PUSHER_APP_CLUSTER
    }
  },

  created () {
    this.$emit('input', this.variables)
  }
}
</script>
