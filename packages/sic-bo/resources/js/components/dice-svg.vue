<template>
  <div :style="{width: `${$attrs.size ? $attrs.size : 24}px`, height: `${$attrs.size ? $attrs.size : 24}px`}">
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.62 96.62">
      <g id="illustration">
        <g xmlns="http://www.w3.org/2000/svg">
          <rect class="cls-1" fill="currentColor" width="96.62" height="96.62"/>
        </g>
        <g v-if="$attrs.num == 1" id="p1">
          <path xmlns="http://www.w3.org/2000/svg" fill="#272325" class="cls-2" d="M56.41,48.31c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
        </g>
        <g v-if="$attrs.num == 2" id="p2" xmlns="http://www.w3.org/2000/svg">
          <path class="cls-2" fill="#272325" d="M72.56,33.6c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
          <circle class="cls-2" fill="#272325" cx="31.21" cy="63.02" r="8.1"/>
        </g>
        <g v-if="$attrs.num == 3" id="p3" xmlns="http://www.w3.org/2000/svg">
          <path class="cls-2" fill="#272325" d="M33.24,21.78c3.16,3.16,3.16,8.29,0,11.45-3.16,3.16-8.29,3.16-11.45,0s-3.16-8.29,0-11.45,8.29-3.16,11.45,0Z"/>
          <path class="cls-2" fill="#272325" d="M54.03,42.58c3.16,3.16,3.16,8.29,0,11.45-3.16,3.16-8.29,3.16-11.45,0-3.16-3.16-3.16-8.29,0-11.45s8.29-3.16,11.45,0Z"/>
          <path class="cls-2" fill="#272325" d="M74.83,63.38c3.16,3.16,3.16,8.29,0,11.45-3.16,3.16-8.29,3.16-11.45,0-3.16-3.16-3.16-8.29,0-11.45,3.16-3.16,8.29-3.16,11.45,0Z"/>
        </g>
        <g v-if="$attrs.num == 4" id="p4" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path class="cls-2" fill="#272325" d="M38.58,33.6c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
            <circle class="cls-2" fill="#272325" cx="30.48" cy="63.02" r="8.1"/>
          </g>
          <g>
            <path class="cls-2" fill="#272325" d="M74.23,33.6c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
            <circle class="cls-2" fill="#272325" cx="66.13" cy="63.02" r="8.1"/>
          </g>
        </g>
        <g v-if="$attrs.num == 5" id="p5" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <path class="cls-2" fill="#272325" d="M38.58,33.6c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
              <path class="cls-2" fill="#272325" d="M38.58,63.02c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
            </g>
            <g>
              <path class="cls-2" fill="#272325" d="M74.23,33.6c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
              <path class="cls-2" fill="#272325" d="M74.23,63.02c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
            </g>
          </g>
          <circle class="cls-2" fill="#272325" cx="48.31" cy="48.31" r="8.1" transform="translate(-6.76 88.74) rotate(-81.28)"/>
        </g>
        <g v-if="$attrs.num == 6">
          <g>
            <path class="cls-2" fill="#272325" d="M38.06,18.89c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
            <circle class="cls-2" fill="#272325" cx="29.96" cy="48.31" r="8.1" transform="translate(-22.53 70.13) rotate(-80.76)"/>
            <circle class="cls-2" fill="#272325" cx="29.96" cy="77.72" r="8.1" transform="translate(-27.59 17.5) rotate(-22.62)"/>
          </g>
          <g>
            <path class="cls-2" fill="#272325" d="M74.75,18.89c0,4.47-3.63,8.1-8.1,8.1s-8.1-3.63-8.1-8.1,3.63-8.1,8.1-8.1,8.1,3.63,8.1,8.1Z"/>
            <circle class="cls-2" fill="#272325" cx="66.65" cy="48.31" r="8.1" transform="translate(-14.49 34.46) rotate(-26.25)"/>
            <circle class="cls-2" fill="#272325" cx="66.65" cy="77.72" r="8.1" transform="translate(-21.4 129.97) rotate(-80.07)"/>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
    div {
        display: inline-block;
        position: relative;
        svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>

<script>
export default {
  params: {
    num: Number,
    size: Number
  }
}
</script>
