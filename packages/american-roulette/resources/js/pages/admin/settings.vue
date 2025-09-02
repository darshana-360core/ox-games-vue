<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('General') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-combobox
              v-model="form.GAME_AMERICAN_ROULETTE_CATEGORIES"
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
              v-model="form.GAME_AMERICAN_ROULETTE_BANNER"
              :label="$t('Banner')"
              name="banner"
              :folder="`games/${packageId}`"
            />

            <file-upload
              v-model="form.GAME_AMERICAN_ROULETTE_BACKGROUND"
              :label="$t('Background image')"
              name="background"
              :folder="`games/${packageId}`"
              :clearable="true"
            />

            <v-text-field
              v-model.number="form.GAME_AMERICAN_ROULETTE_MIN_BET"
              :label="$t('Min bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_AMERICAN_ROULETTE_MIN_BET')"
              :error-messages="form.errors.get('GAME_AMERICAN_ROULETTE_MIN_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_AMERICAN_ROULETTE_MIN_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_AMERICAN_ROULETTE_MAX_BET"
              :label="$t('Max bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_AMERICAN_ROULETTE_MAX_BET')"
              :error-messages="form.errors.get('GAME_AMERICAN_ROULETTE_MAX_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_AMERICAN_ROULETTE_MAX_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_AMERICAN_ROULETTE_BET_CHANGE_AMOUNT"
              :label="$t('Bet increment / decrement amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_AMERICAN_ROULETTE_BET_CHANGE_AMOUNT')"
              :error-messages="form.errors.get('GAME_AMERICAN_ROULETTE_BET_CHANGE_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_AMERICAN_ROULETTE_BET_CHANGE_AMOUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_AMERICAN_ROULETTE_DEFAULT_BET_AMOUNT"
              :label="$t('Default bet amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_AMERICAN_ROULETTE_DEFAULT_BET_AMOUNT')"
              :error-messages="form.errors.get('GAME_AMERICAN_ROULETTE_DEFAULT_BET_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_AMERICAN_ROULETTE_DEFAULT_BET_AMOUNT')"
            />

            <v-switch
              v-model="form.GAME_AMERICAN_ROULETTE_AUTO_PLAY_ENABLED"
              :label="$t('Auto play')"
              color="primary"
              false-value="false"
              true-value="true"
            />

            <v-text-field
              v-show="form.GAME_AMERICAN_ROULETTE_AUTO_PLAY_ENABLED === 'true'"
              v-model.number="form.GAME_AMERICAN_ROULETTE_AUTO_PLAY_INTERVAL"
              :label="$t('Auto play interval')"
              :rules="[validationPositiveInteger]"
              :error="form.errors.has('GAME_AMERICAN_ROULETTE_AUTO_PLAY_INTERVAL')"
              :error-messages="form.errors.get('GAME_AMERICAN_ROULETTE_AUTO_PLAY_INTERVAL')"
              outlined
              :suffix="$t('seconds')"
              @keydown="clearFormErrors($event, 'GAME_AMERICAN_ROULETTE_AUTO_PLAY_INTERVAL')"
            />
        </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Sounds') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <file-upload
              v-model="form.GAME_AMERICAN_ROULETTE_SOUNDS_WIN"
              :label="$t('Win')"
              name="win"
              :folder="`games/${packageId}`"
              accept=".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac"
              :clearable="true"
            />

            <file-upload
              v-model="form.GAME_AMERICAN_ROULETTE_SOUNDS_LOSE"
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
        GAME_AMERICAN_ROULETTE_CATEGORIES: config(`${this.packageId}.categories`),
        GAME_AMERICAN_ROULETTE_BANNER: config(`${this.packageId}.banner`),
        GAME_AMERICAN_ROULETTE_BACKGROUND: config(`${this.packageId}.background`),
        GAME_AMERICAN_ROULETTE_MIN_BET: config(`${this.packageId}.min_bet`),
        GAME_AMERICAN_ROULETTE_MAX_BET: config(`${this.packageId}.max_bet`),
        GAME_AMERICAN_ROULETTE_BET_CHANGE_AMOUNT: config(`${this.packageId}.bet_change_amount`),
        GAME_AMERICAN_ROULETTE_DEFAULT_BET_AMOUNT: config(`${this.packageId}.default_bet_amount`),
        GAME_AMERICAN_ROULETTE_AUTO_PLAY_ENABLED: '' + config(`${this.packageId}.auto_play.enabled`),
        GAME_AMERICAN_ROULETTE_AUTO_PLAY_INTERVAL: config(`${this.packageId}.auto_play.interval`),
        GAME_AMERICAN_ROULETTE_SOUNDS_WIN: config(`${this.packageId}.sounds.win`),
        GAME_AMERICAN_ROULETTE_SOUNDS_LOSE: config(`${this.packageId}.sounds.lose`)
      }
    }
  },

  created () {
    this.$emit('input', this.variables)
  }
}
</script>
