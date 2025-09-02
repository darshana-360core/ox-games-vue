<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('General') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-combobox
              v-model="form.GAME_HEADS_OR_TAILS_CATEGORIES"
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
              v-model="form.GAME_HEADS_OR_TAILS_BANNER"
              :label="$t('Banner')"
              name="banner"
              :folder="`games/${packageId}`"
            />

            <file-upload
              v-model="form.GAME_HEADS_OR_TAILS_BACKGROUND"
              :label="$t('Background image')"
              name="background"
              :folder="`games/${packageId}`"
              :clearable="true"
            />

            <v-text-field
              v-model.number="form.GAME_HEADS_OR_TAILS_MIN_BET"
              :label="$t('Min bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_HEADS_OR_TAILS_MIN_BET')"
              :error-messages="form.errors.get('GAME_HEADS_OR_TAILS_MIN_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_HEADS_OR_TAILS_MIN_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_HEADS_OR_TAILS_MAX_BET"
              :label="$t('Max bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_HEADS_OR_TAILS_MAX_BET')"
              :error-messages="form.errors.get('GAME_HEADS_OR_TAILS_MAX_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_HEADS_OR_TAILS_MAX_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_HEADS_OR_TAILS_BET_CHANGE_AMOUNT"
              :label="$t('Bet increment / decrement amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_HEADS_OR_TAILS_BET_CHANGE_AMOUNT')"
              :error-messages="form.errors.get('GAME_HEADS_OR_TAILS_BET_CHANGE_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_HEADS_OR_TAILS_BET_CHANGE_AMOUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT"
              :label="$t('Default bet amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT')"
              :error-messages="form.errors.get('GAME_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_HEADS_OR_TAILS_HOUSE_EDGE"
              :label="$t('House edge')"
              :rules="[validationNumeric]"
              :error="form.errors.has('GAME_HEADS_OR_TAILS_HOUSE_EDGE')"
              :error-messages="form.errors.get('GAME_HEADS_OR_TAILS_HOUSE_EDGE')"
              outlined
              suffix="%"
              :hint="houseEdgeHint"
              persistent-hint
              class="mb-5"
              @keydown="clearFormErrors($event, 'GAME_HEADS_OR_TAILS_HOUSE_EDGE')"
            />

            <v-switch
              v-model="form.GAME_HEADS_OR_TAILS_AUTO_PLAY_ENABLED"
              :label="$t('Auto play')"
              color="primary"
              false-value="false"
              true-value="true"
            />

            <v-text-field
              v-show="form.GAME_HEADS_OR_TAILS_AUTO_PLAY_ENABLED === 'true'"
              v-model.number="form.GAME_HEADS_OR_TAILS_AUTO_PLAY_INTERVAL"
              :label="$t('Auto play interval')"
              :rules="[validationPositiveInteger]"
              :error="form.errors.has('GAME_HEADS_OR_TAILS_AUTO_PLAY_INTERVAL')"
              :error-messages="form.errors.get('GAME_HEADS_OR_TAILS_AUTO_PLAY_INTERVAL')"
              outlined
              :suffix="$t('seconds')"
              @keydown="clearFormErrors($event, 'GAME_HEADS_OR_TAILS_AUTO_PLAY_INTERVAL')"
            />

            <file-upload
              v-model="form.GAME_HEADS_OR_TAILS_IMAGES_HEADS"
              :label="$t('Heads image texture')"
              name="heads"
              :folder="`games/${packageId}`"
            />

            <file-upload
              v-model="form.GAME_HEADS_OR_TAILS_IMAGES_TAILS"
              :label="$t('Tails image texture')"
              name="tails"
              :folder="`games/${packageId}`"
            />

            <file-upload
              v-model="form.GAME_HEADS_OR_TAILS_IMAGES_EDGE"
              :label="$t('Edge image texture')"
              name="edge"
              :folder="`games/${packageId}`"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Sounds') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <file-upload
              v-model="form.GAME_HEADS_OR_TAILS_SOUNDS_WIN"
              :label="$t('Win')"
              name="win"
              :folder="`games/${packageId}`"
              accept=".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac"
              :clearable="true"
            />

            <file-upload
              v-model="form.GAME_HEADS_OR_TAILS_SOUNDS_LOSE"
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
import FormMixin from '~/mixins/Form'
import { config } from '~/plugins/config'
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
        GAME_HEADS_OR_TAILS_CATEGORIES: config(`${this.packageId}.categories`),
        GAME_HEADS_OR_TAILS_BANNER: config(`${this.packageId}.banner`),
        GAME_HEADS_OR_TAILS_BACKGROUND: config(`${this.packageId}.background`),
        GAME_HEADS_OR_TAILS_IMAGES_HEADS: config(`${this.packageId}.images.heads`),
        GAME_HEADS_OR_TAILS_IMAGES_TAILS: config(`${this.packageId}.images.tails`),
        GAME_HEADS_OR_TAILS_IMAGES_EDGE: config(`${this.packageId}.images.edge`),
        GAME_HEADS_OR_TAILS_MIN_BET: parseInt(config(`${this.packageId}.min_bet`), 10),
        GAME_HEADS_OR_TAILS_MAX_BET: parseInt(config(`${this.packageId}.max_bet`), 10),
        GAME_HEADS_OR_TAILS_BET_CHANGE_AMOUNT: parseInt(config(`${this.packageId}.bet_change_amount`), 10),
        GAME_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT: parseInt(config(`${this.packageId}.default_bet_amount`), 10),
        GAME_HEADS_OR_TAILS_HOUSE_EDGE: parseFloat(config(`${this.packageId}.house_edge`)),
        GAME_HEADS_OR_TAILS_AUTO_PLAY_ENABLED: '' + config(`${this.packageId}.auto_play.enabled`),
        GAME_HEADS_OR_TAILS_AUTO_PLAY_INTERVAL: config(`${this.packageId}.auto_play.interval`),
        GAME_HEADS_OR_TAILS_SOUNDS_WIN: config(`${this.packageId}.sounds.win`),
        GAME_HEADS_OR_TAILS_SOUNDS_LOSE: config(`${this.packageId}.sounds.lose`)
      }
    }
  },

  computed: {
    houseEdgeHint () {
      return this.$t('This parameter affects payout calculation.')
        + ' '
        + this.$t('Payout is calculated like this: {0}.', ['2 - houseEdge / 100'])
        + ' '
        + this.$t('Hence the more house edge is the less payout a user will get.')
    }
  },

  created () {
    this.$emit('input', this.variables)
  }
}
</script>
