<template>
  <div class="common-star">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item " :key="index"></span>
  </div>
</template>

<script>
  export default {
    props: {
      score: {
        type: Number
      }
    },
    computed: {
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push('on');
        }
        while (result.length < 5) {
          result.push('off');
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  bg-image($url)
      background url($url + "@2x.png") no-repeat center/cover
      @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio:3)
          background url($url + "@3x.png") no-repeat center/cover
    .common-star
      display: inline-block
      font-size: 0
      .star-item
        display: inline-block
        background-repeat: no-repeat
        background-size:0.24rem 0.24rem
        width:0.24rem
        height:0.24rem
        margin-right: 0.06rem
        &.on
          bg-image("../../assets/img/star-jihuo")
        &.off
          bg-image("../../assets/img/star")
</style>