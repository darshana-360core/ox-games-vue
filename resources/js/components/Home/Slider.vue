<template>
  <div class="container pb-4">
    <!-- <v-carousel
      :cycle="slider.cycle && slidesCount > 1"
      :hide-delimiters="!slider.pagination || slidesCount === 1"
      :show-arrows="slider.navigation && slidesCount > 1"
      :interval="slider.interval * 1000"
      hide-delimiter-background
      :height="isMobile ? (slider.height_mobile || 300) : slider.height"
      cycle
      class="home-page-slider"
    >
      <v-carousel-item v-for="(slide, i) in slider.slides" :key="i">
        <v-img 
          v-if="slide.image && slide.image.url"
          :src="slide.image.url" 
          class="slide-image align-center text-center fill-height"
          >
          <template #default>
            <v-card-title class="fill-height pa-0">
              <v-row align="center" class="fill-height pt-4" :class="{ 'darken-60123': slider.overlay }">
                <v-col class="text-center" cols="12 px-4">
                  <h3 v-if="slide.title" class="slide-title">
                    {{ slide.title }}
                  </h3>
                  <h4 v-if="slide.subtitle" class="slide-subtitle font-weight-normal mt-2 mt-md-5">
                    {{ slide.subtitle }}
                  </h4>
                  <div v-if="slide.link.title" class="mt-5">
                    <v-btn color="primary" large :href="slide.link.url">
                      {{ slide.link.title }}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-title>
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel> -->
    <VueSlickCarousel
      :autoplay="slider.cycle && slidesCount > 1"
      :arrows="slider.navigation && slidesCount > 1"
      :dots="slider.pagination && slidesCount > 1"
      :autoplaySpeed="slider.interval * 1000"
      :infinite="slider.cycle"
      :adaptiveHeight="true"
      :responsive="responsiveOptions"
      :slidesToShow="3"
      class="game-slider home-page-slider"
    >
      <div v-for="(slide, i) in slider.slides" :key="i" class="slick-slide-wrapper">
        <div
          class="slide-image"
          :class="{'slide-overlay':slide.title}"
          :style="{
            backgroundImage: `url(${slide.image?.url})`,
            height: isMobile ? (slider.height_mobile || 300) + 'px' : slider.height + 'px',
          }"
        >
          <div class="slide-content" :class="{ 'darken-60123': slider.overlay }">
            <!-- {{ slider.interval * 1000 }} -->
            <h3 v-if="slide.title" class="slide-title">{{ slide.title }}</h3>
            <h4 v-if="slide.subtitle" class="slide-subtitle">{{ slide.subtitle }}</h4>
            <div v-if="slide.link?.title" class="slide-button">
              <v-btn color="primary" large :href="slide.link.url">
                {{ slide.link.title }}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>

  </div>
  
</template>

<script>
import { config } from '~/plugins/config'
import DeviceMixin from '~/mixins/Device'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'slick-carousel/slick/slick-theme.css'
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  mounted() {
    this.injectProgressAnimation();
  },
  watch: {
    'slider.interval': {
      immediate: true,
      handler() {
        this.injectProgressAnimation();
      }
    }
  },
  components: { VueSlickCarousel },
  props: {
    // slider: Object,
    // isMobile: Boolean
  },
  mixins: [DeviceMixin],
  computed: {
    slider () {
      return config('settings.content.home.slider')
    },
    // slidesCount () {
    //   return this.slider ? this.slider.slides.length : 0
    // }
    slidesCount() {
      return this.slider.slides?.length || 0;
    }
  },
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
  },
  methods: {
    injectProgressAnimation() {
      const duration = this.slider.interval * 1000;

      // Remove existing style if already added
      const existing = document.getElementById('dynamic-progress-style');
      if (existing) existing.remove();

      // Create new style block
      const style = document.createElement('style');
      style.id = 'dynamic-progress-style';
      style.innerHTML = `
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .game-slider .slick-dots li.slick-active button:before {
          animation: progress ${duration}ms linear !important;
          animation-timing-function: ease;
        }
      `;
      document.head.appendChild(style);
    }
  }
}
</script>
<style lang="scss" scoped>
  .darken-60 {
    background: rgba(0, 0, 0, 0.6);
  }
  .slide-image::v-deep {
    .v-responsive__content {
      height: 100%;
    }
  }
  // .game-slider{
  //   .slick-dots{
  //     li{
  //       &.slick-active{
  //         button{
  //           // animation: progress ${duration}ms linear infinite !important;    
  //         }
  //       }
  //     }
  //   }
  // }

  @keyframes progress{
    0%{
      width: 0;
    }
    100%{
      width: 100%;
    }
  }
</style>
