<template>
  <div class="d-flex justify-center align-center flex-wrap languagesList">
    <a v-for="lang in locales" :key="lang.code" class="d-flex justify-center align-center flex-wrap m-1" :class="{ active: lang.code === locale }" v-if="['en', 'zh-cn', 'de', 'fr', 'es'].includes(lang.code)"
      @click.prevent="setLocale(lang.code)">
      <country-flag :country="lang.flag || lang.code" class="my-0" />
      <span class="w-full text-center">{{ lang.title }}</span>
    </a>
  </div>
</template>


<script>
import CountryFlag from 'vue-country-flag'
import { mapState } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  components: { CountryFlag },

  data() {
    return {
      modal: false,
      value: null
    }
  },

  computed: {
    ...mapState('lang', [
      'locale',
      'locales'
    ])
  },
  watch: {
    value(locale) {
      if (locale) {
        this.setLocale(locale)
      }
    }
  },

  created() {
    this.value = this.locale
  },

  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)
        this.$store.dispatch('lang/setLocale', { locale })
        this.close()
      }
    },
    close() {
      this.modal = false
    }
  }
}
</script>
