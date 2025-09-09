<template>
  <v-container>
    <v-row align="center" justify="center" class="mb-6">
      <v-col cols="12" md="8" lg="7">
        
        
            <div class="evm-qr-wrap ">
              <div class="evm-qr-card mt-5">
                <div class="evm-qr-header">
                  <!-- <div class="evm-qr-title">EVM QR Code</div> -->
                  <div class="evm-qr-sub">{{ $t('Chain:') }} {{ chain }}</div>
                </div>
                <div class="evm-qr-body  grid grid-cols-1  gap-4 mt-4 justify-center">
                  <div class="evm-qr-code mx-auto md:mx-0 " ref="simpleQr"></div>
                  <div class="evm-qr-fields">
                    <v-text-field
                      :label="$t('Address :')"
                      v-model="address"
                      outlined
                      dense
                      readonly
                    >
                      <template v-slot:append>
                        <v-btn icon small @click="copyToClipboard(address)">
                          <v-icon small>mdi-content-copy</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                    <v-text-field
                      :label="$t('Amount :')"
                      v-model.number="amount"
                      outlined
                      dense
                    >
                      <template v-slot:append>
                        <v-btn icon small @click="copyToClipboard(String(amount || 0))">
                          <v-icon small>mdi-content-copy</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                    <div class="text-left mt-2">
                      <v-btn @click="cancelOrder()">{{ $t('Cancel') }}</v-btn>
                    </div>
                  </div>
                </div>
                <!-- <div class="evm-qr-disclaimer mt-6">
                  <div class="evm-qr-disclaimer-title">{{ $t('Disclaimer') }}</div>
                  <ul>
                    <li>{{ $t('Activate Package Usage : Only the top-up balance can be used for activating packages.') }}</li>
                    <li>{{ $t('Exclusive Use of Top-Up Balance : The top-up balance is not applicable for any other purposes.') }}</li>
                    <li>{{ $t('Top-Up Wallet Balance: Select and verify the blockchain network before adding balance to the top-up wallet.') }}</li>
                  </ul>
                </div> -->
              </div>
            </div>
         
      
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import { loadScript } from '~/plugins/utils'
import axios from 'axios'
export default {
  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    // return { title: this.$t('Make a deposit') }
  },

  data () {
    return {
      address: '',
      amount: null,
      qrLoaded: false,
      chain: ''
    }
  },

  computed: {},

  watch: {
    address () { this.renderQr() },
    amount () { this.renderQr() }
  },

  async mounted () {
    const { data } = await axios.get('/api/deposit/data', {})
    if(data.success != true){
      if (this.$router && typeof this.$router.push === 'function') {
          this.$router.push('/user/account/deposits')
        } else {
          window.location.href = '/user/account/deposits'
        }
        return
    }
    const depositData = data.data
    this.chain = depositData.chain
    this.address = depositData.evm_address
    this.amount = Number(depositData.amount) + Number(depositData.fees_amount)
    this.ensureQr().then(this.renderQr)
  },

  methods: {
    async ensureQr () {
      if (this.qrLoaded) return true
      await new Promise(resolve => {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js', () => {
          this.qrLoaded = true
          resolve(true)
        })
      })
      return true
    },
    renderQr () {
      this.$nextTick(() => {
        const el = this.$refs.simpleQr
        if (!el || !window.QRCode) return
        while (el.firstChild) el.removeChild(el.firstChild)
        const payload = { to: this.address, value: this.amount || 0 }
        // eslint-disable-next-line no-new
        new window.QRCode(el, {
          text: JSON.stringify(payload),
          width: 200,
          height: 200,
          colorDark: '#000000',
          colorLight: '#ffffff'
        })
      })
    },
    async copyToClipboard (value) {
      try {
        await navigator.clipboard.writeText(value || '')
        this.$store.dispatch('message/success', { text: this.$t('Copied to clipboard') })
      } catch (e) {
        this.$store.dispatch('message/error', { text: this.$t('Copy failed') })
      }
    },
    async cancelOrder(){
      const { data } = await axios.post('/api/deposit/cancel')
      window.location.href = '/user/account/deposits'
    }
  }
}
</script>
<style lang="scss" scoped>
  .method-description {
    white-space: pre-line;
  }

  .StripeElement {
    padding: 16px 0 16px 12px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.24);

    .ElementsApp {
      .InputElement {
        font-size: 16px;
        line-height: 20px;
        padding: 8px 0 8px;
      }
    }
  }

  .StripeElement--focus {
    border-width: 2px;
    border-color: var(--v-primary-base);
  }

  .StripeElement--invalid {
    border-color: #ff5252;
  }

  .theme-light {
    .StripeElement {
      border-color: rgba(0, 0, 0, 0.42);
    }

    .StripeElement--focus {
      border-color: var(--v-primary-base);
    }
  }

  /*.v-alert::v-deep {
    .v-alert__wrapper {
      .v-icon {
        align-self: center;
      }
    }
  }*/

  .evm-qr-wrap {
    display: flex;
    justify-content: center;
  }
  .evm-qr-card {
       border: 2px solid #8e6fdd;
    border-radius: 12px;
    padding: 16px;
    max-width: 520px;
    width: 100%;
  }
  .evm-qr-header {
    text-align: center;
    margin-bottom: 12px;
  }
  .evm-qr-title {
    font-weight: 600;
    font-size: 18px;
  }
  .evm-qr-sub {
    opacity: .8;
    margin-top: 4px;
  }
  // .evm-qr-body {
  //   display: grid;
  //   grid-template-columns: 220px 1fr;
  //   gap: 16px;
  //   align-items: start;
  // }
  .evm-qr-code {
    background: #fff;
    padding: 8px;
    border-radius: 8px;
    display: inline-block;
    max-width: 220px;
  }
  .evm-qr-disclaimer {
    border: 1px solid #8e6fdd;
    border-radius: 12px;
    padding: 12px;
  }
  .evm-qr-disclaimer-title {
    font-weight: 600;
    margin-bottom: 8px;
  }
</style>
