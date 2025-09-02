<template>
  <fullscreen v-model="fullscreen">
    <div v-if="ready" ref="container" class="card-game-container" :class="{ 'system-bar-enabled': systemBarEnabled, 'modal': modalPaytable || modalInfo || modalProvably }" :style="`height: ${containerHeight}px;`">
      <div ref="table" class="card-game-table" @click="e => $emit('click', e)">
        <img :src="`${imageBaseUrl}/table-${deck}.jpg`" class="">
        <img class="logo" :src="logoUrl">
        <div class="sitename">{{ appName }}</div>
        <div class="paytable-min">
          {{ $t('Min') }}: {{ paytableMin }}
        </div>
        <div class="paytable-max">
          {{ $t('Max') }}: {{ paytableMax }}
        </div>
        <div class="paytable-link" @click="modalPaytable = !modalPaytable" />
        <div class="cards">
          <slot />
        </div>
        <div class="control-panel">
          <slot name="control-panel" />
        </div>
        <chips class="chips" :class="{ disabled: !betMode }" :bet-min="paytableMin" :bet-max="paytableMax" :bet="bet" @bet="event => placeBet(event.bet, event.pos)" />
        <slot name="bet-panel" :chips="chips" :unbet="unbet" :dealer="dealer" :animated="chipsAnimated" />
        <div class="button-mini game-info" @click="modalInfo = true">
          <img :src="`${imageBaseUrl}/info.png`">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 682.667 682.667"><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0h-29.256v176.16c0 28.997-23.591 52.588-52.588 52.588h-46.852c-28.997 0-52.588-23.591-52.588-52.588 0-27.059 20.544-49.411 46.853-52.278V0h-29.256c-28.997 0-52.588-23.591-52.588-52.587 0-28.997 23.591-52.588 52.588-52.588H0c28.997 0 52.587 23.591 52.587 52.588C52.587-23.591 28.997 0 0 0" style="fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(337.844 105.175)" fill="#ffffff" fill-opacity="0.8"></path><path d="M0 0c38.464 0 69.757 31.293 69.757 69.758 0 38.464-31.293 69.757-69.757 69.757-38.464 0-69.757-31.293-69.757-69.757C-69.757 31.293-38.464 0 0 0" style="fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(256 372.485)" fill="#ffffff"></path></g></svg> -->
        </div>
        <div class="button-mini provably" @click="modalProvably = true">
          <img :src="`${imageBaseUrl}/provably.png`">
           <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve" class=""><g><path d="M223.176 368.774a56.215 56.215 0 0 0-20.05-12.912c16.068-21.547 13.495-54.234-5.963-72.966l-.502-.501c-16.606-16.605-41.051-20.702-61.531-12.301-2.643-8.909-7.473-17.073-14.228-23.828l-.509-.508c-21.048-21.936-58.937-21.934-79.986.007l-1.419 1.419-2.946-2.946c-48.056-48.056-48.056-126.25.001-174.308 48.057-48.057 126.251-48.056 174.309 0l28.742 28.743-54.534 52.982c-24.31 22.546-24.645 64.053-.691 87 22.721 23.68 63.601 23.679 86.32 0l18.8-18.8a1.525 1.525 0 0 1 2.146 0L403.79 332.508l.073.073 3.998 3.998c7.444 7.143 7.443 19.994 0 27.137-7.48 7.479-19.654 7.48-27.135-.001-.214-.214-.443-.401-.665-.601-.405-.431-.802-.866-1.223-1.287l-31.848-31.848c-6.64-6.64-17.408-6.64-24.048 0-6.641 6.64-6.641 17.408 0 24.048l31.848 31.848c8.479 8.136 8.479 22.776 0 30.912-8.137 8.48-22.775 8.48-30.912 0l-31.68-31.68c-6.64-6.64-17.408-6.64-24.048 0-6.641 6.64-6.641 17.408 0 24.048l31.51 31.51c8.651 8.512 8.761 22.501.161 31.09-8.137 8.48-22.775 8.48-30.911 0l-35.498-35.497c11.905-21.255 7.869-49.939-9.735-66.982z" fill="#ffffff" opacity="1" data-original="#ffffff" class=""></path><path d="M477.983 73.834c45.303 45.304 45.355 118.986.162 164.359l-61.97 58.604-100.992-100.991c-13.223-13.782-37.019-13.781-50.242 0l-18.8 18.8c-10.061 10.486-28.163 10.485-38.224 0-5.164-5.164-7.975-12.032-7.915-19.335s2.984-14.122 8.232-19.201L313.286 74.007c45.322-45.517 119.283-45.599 164.697-.173zM90.178 389.881l-.502-.501c-8.749-8.395-8.75-23.502 0-31.897l31.225-31.225.018-.019 19.796-19.797c8.964-8.994 23.706-8.735 32.398.502 8.749 8.395 8.75 23.502 0 31.897l-51.04 51.04c-8.792 8.793-23.101 8.793-31.895 0zM33.733 333.434l-.504-.504c-8.791-8.795-8.79-23.101.003-31.895l31.225-31.225c8.395-8.749 23.501-8.75 31.896 0l.509.508c8.741 8.387 8.741 23.497-.004 31.887L65.63 333.434c-8.795 8.795-23.104 8.793-31.897 0zM179.387 445.463c-8.793 8.793-23.103 8.793-31.896 0l-.501-.502c-8.794-8.793-8.794-23.102 0-31.897l20.242-20.243c8.963-8.994 23.706-8.735 32.398.501 8.749 8.395 8.75 23.502 0 31.897z" fill="#ffffff" opacity="1" class="" fill-opacity="0.6"></path></g></svg> -->
        </div>
        <div class="button-mini full" @click="fullscreen = !fullscreen">
          <img :src="`${imageBaseUrl}/full.png`">
        </div>
        <slot name="bottom" />
      </div>
      <modal-info v-model="modalPaytable">
        <slot name="paytable" />
      </modal-info>
      <modal-info v-model="modalInfo">
        <slot name="info" />
      </modal-info>
      <modal-info v-model="modalProvably">
        <div class="provably-fair-form">
          <h5>
            {{ $t('Provably fair') }}
          </h5>
          <form @submit.prevent="createProvablyFairGame">
            <label>{{ $t('Client seed') }}</label>
            <input v-model="provablyFairGame.client_seed">
            <label>{{ $t('Server hash') }}</label>
            <div class="input-btn">
              <input
                ref="hash"
                v-model="provablyFairGame.hash"
                readonly
              >
              <div class="btn-icon" @click="copyToClipboard($refs.hash)">
                <object>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" class="svg-inline--fa fa-clone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>
                </object>
              </div>
            </div>
            <button
              type="submit"
              :disabled="!provablyFairGame || !provablyFairGame.client_seed || !(provablyFairGame.client_seed.length > 0 && provablyFairGame.client_seed.length < 32)"
            >
              {{ $t('Generate') }}
            </button>
          </form>
        </div>
      </modal-info>
      <div class="portrait-warn">
        {{ $t('Please rotate your device to landscape orientation') }}
      </div>
    </div>
    <preloader v-else :progress="loadingProgress" />
  </fullscreen>
</template>


<script>
import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'
import { sleep, copyToClipboard, preloadImage } from '~/plugins/utils'
import GameMixin from '~/mixins/Game'
import Chips from './Chips'
import ChipValues from './ChipValues'
import ModalInfo from './ModalInfo'
import { config } from '~/plugins/config'
import Preloader from '~/components/Games/CardGame/Preloader'

Vue.use(VueFullscreen)

export default {
  components: { Chips, ModalInfo, Preloader },
  mixins: [GameMixin],
  props: {
    actions: {
      type: Array,
      required: true
    },
    betMode: {
      type: String,
      default: null
    },
    chipsBet: {
      type: Array,
      default: () => ['ante', 'call']
    }
  },
  data () {
    return {
      imageBaseUrl: '/images/games/card-game-ui',
      ready: false,
      loadingProgress: 0,
      chips: {},
      resolvers: {},
      dealer: false,
      modalPaytable: false,
      modalInfo: false,
      modalProvably: false,
      fullscreen: false,
      containerHeight: 50
    }
  },
  computed: {
    appName () {
      return config('app.name')
    },
    bet () {
      return Object.keys(this.chips).reduce((ak, k) => ak + this.chips[k].reduce((acc, item) => acc + item.bet, 0), 0)
    },
    deck () {
      return config('settings.games.playing_cards.deck')
    },
    systemBarEnabled () {
      return config('settings.interface.system_bar.enabled')
    },
    logoUrl () {
      return `/images/games/${this.gamePackageId}/logo.png`
    },
    paytableMin () {
      return this.config.min_bet
    },
    paytableMax () {
      return this.config.max_bet
    }
  },
  created () {
    this.chipsBet.forEach(el => this.$set(this.chips, el, []))
  },
  mounted () {
    this.$nextTick(this.init)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    copyToClipboard,
    async init () {
      await this.loadCardDeck()
      this.loadingProgress += 15
      await preloadImage(this.logoUrl)
      this.loadingProgress += 5
      await this.preloadGameImages(this.actions, progress => {
        this.loadingProgress = Math.min(25 + Math.round(progress / 100 * 80), 100)
      })
      this.ready = true
      await this.$nextTick()
      this.resize()
      window.addEventListener('resize', this.resize)
    },
    createProvablyFairGame () {
      this.$store.dispatch('provably-fair/create', { key: this.gamePackageId, seed: this.provablyFairGame.client_seed })
    },
    reset () {
      Object.keys(this.chips).forEach(k => {
        this.$set(this.chips, k, [])
      })
    },
    async resize () {
      // 64 40
      // this.$refs.table.style.transform = `scale(${window.outerWidth / 3184})`
      this.containerHeight = 50
      await this.$nextTick()
      this.containerHeight = this.$el.offsetHeight
      if (3184 / 1440 <= window.innerWidth / this.containerHeight) {
      // if (3184 / 1440 <= window.innerWidth / (window.innerHeight - 64 - (window.innerWidth < 1250 ? 64 : 40))) {
        this.$refs.table.style.transform = `scale(${this.containerHeight / 1440}) translateX(-50%)`
      } else {
        this.$refs.table.style.transform = `scale(${window.innerWidth / 3184}) translateX(-50%)`
      }
    },
    placeBet (bet, pos, mode, source) {
      if (ChipValues.indexOf(bet) === -1) {
        let a = 0
        while (bet > 0) {
          const chip = ChipValues.reduce((acc, val) => bet >= val ? val : acc, 1)
          bet -= chip
          setTimeout(() => this.placeBet(chip, pos, mode, source), a += 100)
        }
      } else {
        if (mode === undefined) {
          mode = this.betMode
        }
        this.$emit('bet', bet, mode)
        if (!pos) {
          if (source === 'dealer') {
            pos = {
              x: 3184 / 2,
              y: 0
            }
          } else {
            pos = {
              x: 3184 / 2,
              y: 1520
            }
          }
        }
        if (mode && Array.isArray(this.chips[mode])) {
          this.chips[mode].push({ bet, pos })
        }
      }
    },
    unbet (mode) {
      if (mode === undefined) {
        mode = this.betMode
      }
      if (mode && Array.isArray(this.chips[mode]) && this.chips[mode].length) {
        this.$emit('unbet', this.chips[mode].pop().bet, mode)
      }
    },
    betWin (mode) {
      if (mode === undefined) {
        mode = this.betMode
      }
      return new Promise(resolve => {
        this.resolvers[mode] = () => {
          resolve()
        }
        this.$nextTick(() => {
          this.$set(this.chips, mode, [])
        })
      })
    },
    betLoss (mode) {
      return new Promise(resolve => {
        this.dealer = true
        this.resolvers[mode] = () => {
          resolve()
          this.dealer = false
        }
        this.$nextTick(() => {
          this.$set(this.chips, mode, [])
        })
      })
    },
    demoLose () {
      return new Promise(resolve => {
        this.dealer = true
        const lookupMode = Object.keys(this.chips).filter(k => this.chips[k].length)[0]
        this.resolvers[lookupMode] = () => {
          resolve()
          this.dealer = false
        }
        this.$nextTick(() => {
          Object.keys(this.chips).forEach(k => {
            this.$set(this.chips, k, [])
          })
        })
      })
    },
    async demoWin (wins) {
      const winsChip = {}
      if (typeof wins !== 'object') {
        const v = wins
        wins = {}
        wins[Object.keys(this.chips)[0]] = v
      }
      for (const k in wins) {
        let bet = wins[k]
        const chipsWin = []
        while (bet > 0) {
          const chip = ChipValues.reduce((acc, val) => bet >= val ? val : acc, 1)
          bet -= chip
          bet = parseFloat(bet.toFixed(6))
          chipsWin.push({
            bet: chip,
            pos: {
              x: 3184 / 2,
              y: 0
            }
          })
        }
        if (chipsWin.length) winsChip[k] = chipsWin
      }
      if (Object.keys(winsChip).length > 0) {
        this.dealer = true
        await this.$nextTick()
        for (const k in winsChip) {
          await new Promise(resolve => {
            this.resolvers[k] = resolve
            this.chips[k].push(...(winsChip[k]))
          })
        }
      }
      await sleep(2000)
      this.dealer = false
      await this.$nextTick()
      await new Promise(resolve => {
        const lookupMode = Object.keys(this.chips).filter(k => this.chips[k].length)[0]
        this.resolvers[lookupMode] = resolve
        Object.keys(this.chips).forEach(k => {
          this.$set(this.chips, k, [])
        })
      })
    },
    demoPush () {
      return new Promise(resolve => {
        const lookupMode = Object.keys(this.chips).filter(k => this.chips[k].length)[0]
        this.resolvers[lookupMode] = () => {
          resolve()
        }
        this.$nextTick(() => {
          Object.keys(this.chips).forEach(k => {
            this.$set(this.chips, k, [])
          })
        })
      })
    },
    chipsAnimated (chips) {
      if (typeof this.resolvers[chips] === 'function') {
        this.resolvers[chips]()
        delete this.resolvers[chips]
      }
    },
    async preloadGameImages (actions, onUpdate) {
      const buttons = []
      actions.forEach(button => {
        [null, 'active', 'disabled', 'hover'].forEach(state => {
          buttons.push(`${this.imageBaseUrl}/${button}${state ? '-' + state : ''}.png`)
        })
      })
      const images = [
        `${this.imageBaseUrl}/table-${this.deck}.jpg`,
        `${this.imageBaseUrl}/info.png`,
        `${this.imageBaseUrl}/provably.png`,
        `${this.imageBaseUrl}/full.png`,
        `${this.imageBaseUrl}/popup-bg.png`,
        ...ChipValues.map(chip => `${this.imageBaseUrl}/playing-chips/${chip}.png`),
        ...ChipValues.map(chip => `${this.imageBaseUrl}/bet-chips/${chip}.png`),
        ...buttons
      ]
      for (const image of images) {
        await preloadImage(image)
        if (typeof onUpdate === 'function') onUpdate(images.indexOf(image) / images.length * 100)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import 'scss/card-game-fonts.scss';

.card-game-container {
  width: 100%;
  height: 50px;
  // height: calc(100vw * 1440 / 3184);
  overflow: hidden;
  user-select: none;
  position: relative;
  // background: #160008;
  background: transparent;
  &.modal {
    z-index: 6;
  }
  height: calc(100vh - 64px - 40px);
  &.system-bar-enabled {
    // height: calc(100vh - 64px - 40px - 20px);
  }
  @media (max-width: 1250px) {
    height: calc(100vh - 64px - 64px);
  }
}
.card-game-table {
  transform-origin: top left;
  position: relative;
  width: 3184px;
  height: 1440px;
  // height: 90vh;
  // overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  left: 50%;
  img:not(.logo){
    width: 100%;
  }
  @media(max-width: 599px){
    transform: scale(0.20) translateX(-50%) !important;
  }
  @media(max-width: 374px){
    transform: scale(0.16) translateX(-50%) !important;
  }
}
.logo {
  position: absolute;
  left: calc(3184px / 2);
  top: 415px;
  transform: translate(-50%, -50%);
  //opacity: 70%;
  //mix-blend-mode: color-dodge;
}
.paytable-min {
  font-family: impact;
  font-size: 15pt;
  text-transform: uppercase;
  position: absolute;
  top: 430px;
  left: 686px;
  transform: rotate(-24deg);
  color: #d2b782;
}
.paytable-max {
  font-family: impact;
  font-size: 15pt;
  text-transform: uppercase;
  position: absolute;
  top: 451px;
  left: 696px;
  transform: rotate(-24deg);
  color: #d2b782;
}
.paytable-link {
  position: absolute;
      top: 333px;
    left: 588px;
    width: 300px;
    height: 150px;
    transform: rotate(-24deg);
  cursor: pointer;
}
.chips {
  position: absolute;
  bottom: 70px;
  left: 360px;
  display: flex;
  transition: bottom 0.3s;
  &.disabled {
    bottom: -190px;
  }
  @media(max-width: 599px){
    bottom: -130px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.control-panel {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.cards {
  position: absolute;
  top: 637px;
  width: 100%;
  // transform: matrix3d(1,0,0.00,0,0.00,0.91,0.42,-0.0003,0,-0.42,0.91,0,0,0,0,1);
  // transform: rotateX(13deg);
  // transform-style: preserve-3d;
}
.button-mini {
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  color: var(--v-primary-lighten1);
  padding: 20px;
  &.game-info {
    left: 364px;
    top: 30px;
  }
  &.provably {
    left: 455px;
    top: 30px;
  }
  &.full {
    right: 394px;
    top: 30px;
  }
  img {
    z-index: 0;
  }
  svg {
    width: 45px;
    height: 45px;
  }
  &:hover {
    img {
      filter: brightness(2);
    }
  }
  &:active {
    img {
      filter: brightness(4);
    }
  }
}
.provably-fair-form {
  min-width: 300px;
  label {
    margin-top: 15px;
    display: block;
    // font-family: 'impact', sans-serif;
    font-size: 1.9em;
    font-weight: normal;
    color: var(--v-primary-lighten4);
  }
  input {
    color: var(--v-primary-lighten4);
    border: 2px solid var(--v-primary-lighten1);
    border-radius: 7px;
    padding: 8px 14px;
    margin: 5px 0;
    display: block;
    width: 100%;
  }
  .input-btn {
    display: flex;
    align-items: center;
    .btn-icon {
      cursor: pointer;
      padding: 0;
      width: 38px;
      height: 38px;
      margin-left: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--v-primary-darken2);
      box-sizing: border-box;
      border-radius: 8px;
      flex-shrink: 0;
      transition: background 0.2s;
      &:hover {
        background: var(--v-secondary-base);
        box-shadow: inset 0 0 4px var(--v-secondary-lighten5);
      }
      &:active {
        background: var(--v-secondary-base);
        box-shadow: inset 0 0 4px var(--v-secondary-lighten5);
      }
      object {
        width: 20px;
        height: 20px;
      }
    }
  }
  button {
    // background: rgba(191 140 42 / 0.25);
    box-sizing: border-box;
    border-radius: 12px;
    margin-top: 8px;
    padding: 8px 16px;
    transition: background 0.2s;
    background: linear-gradient(180deg, var(--v-secondary-base) -20%, var(--v-primary-darken2) 45%, var(--v-primary-darken1) 100%);
    box-shadow: inset 0 -5px 1px rgba(255, 255, 255, 0.1);
    &:hover {
      background: rgba(191 140 42 / 0.45);
    }
    &:active {
      background: rgba(191 140 42 / 0.65);
    }
  }
}

.portrait-warn {
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  z-index: 100;
  background: black;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  // @media (orientation: portrait) {
  //   display: flex;
  // }
}
</style>
