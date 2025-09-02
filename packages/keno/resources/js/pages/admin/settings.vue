<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('General') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-combobox
              v-model="form.GAME_KENO_CATEGORIES"
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
              v-model="form.GAME_KENO_BANNER"
              :label="$t('Banner')"
              name="banner"
              :folder="`games/${packageId}`"
            />

            <file-upload
              v-model="form.GAME_KENO_BACKGROUND"
              :label="$t('Background image')"
              name="background"
              :folder="`games/${packageId}`"
              :clearable="true"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_MIN_BET"
              :label="$t('Min bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_KENO_MIN_BET')"
              :error-messages="form.errors.get('GAME_KENO_MIN_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_KENO_MIN_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_MAX_BET"
              :label="$t('Max bet')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_KENO_MAX_BET')"
              :error-messages="form.errors.get('GAME_KENO_MAX_BET')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_KENO_MAX_BET')"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_BET_CHANGE_AMOUNT"
              :label="$t('Bet increment / decrement amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_KENO_BET_CHANGE_AMOUNT')"
              :error-messages="form.errors.get('GAME_KENO_BET_CHANGE_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_KENO_BET_CHANGE_AMOUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_DEFAULT_BET_AMOUNT"
              :label="$t('Default bet amount')"
              :rules="[validationInteger, validationPositiveNumber]"
              :error="form.errors.has('GAME_KENO_DEFAULT_BET_AMOUNT')"
              :error-messages="form.errors.get('GAME_KENO_DEFAULT_BET_AMOUNT')"
              outlined
              :suffix="$t('credits')"
              @keydown="clearFormErrors($event, 'GAME_KENO_DEFAULT_BET_AMOUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_ROWS_COUNT"
              :label="$t('Rows count')"
              :rules="[validationInteger, validationPositiveNumber, v => validationMin(v, 3), v => validationMax(v, 10)]"
              :error="form.errors.has('GAME_KENO_ROWS_COUNT')"
              :error-messages="form.errors.get('GAME_KENO_ROWS_COUNT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_KENO_ROWS_COUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_COLS_COUNT"
              :label="$t('Columns count')"
              :rules="[validationInteger, validationPositiveNumber, v => validationMin(v, 3), v => validationMax(v, 10)]"
              :error="form.errors.has('GAME_KENO_COLS_COUNT')"
              :error-messages="form.errors.get('GAME_KENO_COLS_COUNT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_KENO_COLS_COUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_SELECT_COUNT"
              :label="$t('How many numbers user should choose')"
              :rules="[validationInteger, validationPositiveNumber, v => validationMax(v, form.GAME_KENO_ROWS_COUNT * form.GAME_KENO_COLS_COUNT)]"
              :error="form.errors.has('GAME_KENO_SELECT_COUNT')"
              :error-messages="form.errors.get('GAME_KENO_SELECT_COUNT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_KENO_SELECT_COUNT')"
            />

            <v-text-field
              v-model.number="form.GAME_KENO_DRAW_COUNT"
              :label="$t('How many numbers will be drawn')"
              :rules="[validationInteger, validationPositiveNumber, v => validationMax(v, form.GAME_KENO_ROWS_COUNT * form.GAME_KENO_COLS_COUNT)]"
              :error="form.errors.has('GAME_KENO_DRAW_COUNT')"
              :error-messages="form.errors.get('GAME_KENO_DRAW_COUNT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_KENO_DRAW_COUNT')"
            />

            <v-switch
              v-model="form.GAME_KENO_AUTO_PLAY_ENABLED"
              :label="$t('Auto play')"
              color="primary"
              false-value="false"
              true-value="true"
            />

            <v-text-field
              v-show="form.GAME_KENO_AUTO_PLAY_ENABLED === 'true'"
              v-model.number="form.GAME_KENO_AUTO_PLAY_INTERVAL"
              :label="$t('Auto play interval')"
              :rules="[validationPositiveInteger]"
              :error="form.errors.has('GAME_KENO_AUTO_PLAY_INTERVAL')"
              :error-messages="form.errors.get('GAME_KENO_AUTO_PLAY_INTERVAL')"
              outlined
              :suffix="$t('seconds')"
              @keydown="clearFormErrors($event, 'GAME_KENO_AUTO_PLAY_INTERVAL')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Paytable') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <template v-for="(payout, i) in form.GAME_KENO_PAYTABLE">
              <v-text-field
                :key="i"
                v-model.number="form.GAME_KENO_PAYTABLE[i]"
                :label="i === 0 ? $t('1 match') : $t('{0} matches', [i + 1])"
                :rules="[validationNonNegativeNumber]"
                :error="form.errors.has('GAME_KENO_PAYTABLE')"
                :error-messages="form.errors.get('GAME_KENO_PAYTABLE')"
                outlined
                :prefix="$t('Bet') + ' x '"
                @keydown="clearFormErrors($event, 'GAME_KENO_PAYTABLE')"
              />
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Sounds') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <file-upload
              v-model="form.GAME_KENO_SOUNDS_WIN"
              :label="$t('Win')"
              name="win"
              :folder="`games/${packageId}`"
              accept=".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac"
              :clearable="true"
            />

            <file-upload
              v-model="form.GAME_KENO_SOUNDS_LOSE"
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
        GAME_KENO_CATEGORIES: config(`${this.packageId}.categories`),
        GAME_KENO_BANNER: config(`${this.packageId}.banner`),
        GAME_KENO_BACKGROUND: config(`${this.packageId}.background`),
        GAME_KENO_MIN_BET: parseInt(config(`${this.packageId}.min_bet`), 10),
        GAME_KENO_MAX_BET: parseInt(config(`${this.packageId}.max_bet`), 10),
        GAME_KENO_BET_CHANGE_AMOUNT: parseInt(config(`${this.packageId}.bet_change_amount`), 10),
        GAME_KENO_DEFAULT_BET_AMOUNT: parseInt(config(`${this.packageId}.default_bet_amount`), 10),
        GAME_KENO_ROWS_COUNT: parseInt(config(`${this.packageId}.rows_count`), 10),
        GAME_KENO_COLS_COUNT: parseInt(config(`${this.packageId}.cols_count`), 10),
        GAME_KENO_SELECT_COUNT: parseInt(config(`${this.packageId}.select_count`), 10),
        GAME_KENO_DRAW_COUNT: parseInt(config(`${this.packageId}.draw_count`), 10),
        GAME_KENO_PAYTABLE: config(`${this.packageId}.paytable`),
        GAME_KENO_AUTO_PLAY_ENABLED: '' + config(`${this.packageId}.auto_play.enabled`),
        GAME_KENO_AUTO_PLAY_INTERVAL: config(`${this.packageId}.auto_play.interval`),
        GAME_KENO_SOUNDS_WIN: config(`${this.packageId}.sounds.win`),
        GAME_KENO_SOUNDS_LOSE: config(`${this.packageId}.sounds.lose`)
      }
    }
  },

  created () {
    this.$emit('input', this.variables)
  }
}
</script>
