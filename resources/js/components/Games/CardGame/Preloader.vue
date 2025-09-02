<template>
  <!-- <div class="wrap">
    <div class="chip">
      {{ progress }}%
    </div>
  </div> -->
  <div class="wrap">
    <div class="psoload">
      <div class="straight"></div>
      <div class="curve"></div>
      <div class="center">{{ progress }}%</div>
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .wrap {
    background-color: black;
    width: 100%;
    height: 100%;
    background-image: url(/images/games/card-game-ui/preloader-bg.png);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: #000;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 50%;
      z-index: 1;
    }
  }
  .chip {
    width: 200px;
    height: 200px;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 31px;
    color: #809f71;
    font-family: 'impact';
    &:after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      height: 200px;
      background-size: cover;
      background-image: url(/images/games/card-game-ui/preloader-chip.png);
      transform-origin: center;
      animation: chip 2s infinite linear;
    }
  }
  @keyframes chip {
    from {
      transform: translate(-50%,-50%) rotate(0deg);
    }
    to {
      transform: translate(-50%,-50%) rotate(360deg);
    }
  }

  @keyframes arrow-spin {
    100% {
      transform: rotate(179deg);
    }
  }

  @-webkit-keyframes arrow-spin {
    100% {
      -webkit-transform: rotate(179deg);
    }
  }

  .psoload,
  .psoload *,
  .psoload *:before,
  .psoload *:after {
    box-sizing: border-box;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }

  .psoload {
    position: relative;
    height: 200px;
    width: 200px;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    z-index: 9;
  }

  .psoload .straight,
  .psoload .curve {
    position: absolute;
    top: 17.5%;
    left: 17.5%;
    width: 65%;
    height: 65%;
    border-radius: 100%;
    animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
    -webkit-animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
  }

  .psoload .straight:before,
  .psoload .straight:after {
    content: '';
    position: absolute;
    width: 15%;
    border-bottom: 3px solid var(--v-primary-base);
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .psoload .straight:before {
    top: 5px;
    left: 5px;
  }

  .psoload .straight:after {
    bottom: 5px;
    right: 5px;
  }

  .psoload .curve:before,
  .psoload .curve:after {
    content: '';
    position: absolute;
    width: 45px;
    height: 10px;
    border: solid 3px transparent;
    border-top-color: var(--v-primary-base);
    border-radius: 50%/10px 10px 0 0;
    z-index: 90001;
  }

  .psoload .curve:before {
    transform: rotate(-63deg) translateX(-27px) translateY(-4px);
    -webkit-transform: rotate(-63deg) translateX(-27px) translateY(-4px);
  }

  .psoload .curve:after {
    bottom: 5px;
    right: 5px;
    transform: rotate(115deg) translateX(-26px) translateY(-12px);
    -webkit-transform: rotate(115deg) translateX(-26px) translateY(-12px);
  }

  .psoload .center {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    border-radius: 100%;
    border: 3px solid var(--v-primary-darken3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: var(--v-primary-lighten1);
    font-family: 'impact';
  }

  .psoload .inner {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    border-radius: 100%;
    animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite reverse;
    -webkit-animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite reverse;
  }

  .psoload .inner:before,
  .psoload .inner:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-width: 11px;
    border-bottom-color: var(--v-primary-darken1);
  }

  .psoload .inner:before {
    top: 12px;
    left: 12px;
    transform: rotate(128deg);
    -webkit-transform: rotate(128deg);
  }

  .psoload .inner:after {
    bottom: 12px;
    right: 12px;
    transform: rotate(-48deg);
    -webkit-transform: rotate(-48deg);
  }
</style>
