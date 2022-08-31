<template>

  <div
  id="follower"
  class="hoverBtn"
  :class="{ active: isActive }">
    <div class="btn">
      <img src="@/assets//images/common/btn_arrow.svg" alt="">
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HoverItem',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('mouseMove', ['isActive'])
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

  #follower {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 100001;
    width: get_vw(180);
    height: get_vw(180);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.5s;
    .btn{
      width: 100%;
      height: 100%;
      display: block;
      border: 1px solid #000;
      border-radius: 50%;
      position: relative;
      img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        max-width: 50px;
        width: get_vw(50);
        @include tab() {
            width: get_vw(30,375);
        }
      }
      p{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        @include Sorts();
        font-size: clamp(10px,get_vw(14),14px);
        @include tab() {
            font-size: get_vw(14,375);
        }
      }
    }
    &.active{
      transition: opacity 0.5s;
      opacity: 1;
    }
}

</style>
