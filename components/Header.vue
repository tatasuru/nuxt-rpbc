<template>
  <div
    id="header"
    class="header">
    <div class="l_header">
      <div  class="l_header__inner">
        <nuxt-link
          to="/"
          class="logo">
          <img
            src="@/assets/images/common/logo.svg"
            alt="RPBC">
        </nuxt-link>
        <span
          class="menu"
          @click="openMenu()">
          MENU
        </span>
      </div>
    </div>

    <div
      :class="{'active': isOpenMenu}"
      class="l_header__menu">
      <div class="l_header__menu-close">
        <span
          id="headerMenuClose"
          class="menu"
          @click="closeMenu()">
          CLOSE
        </span>
      </div>
      <ul class="l_header__menu-inner">
        <li><span class="header_menu_list">TOP</span></li>
        <li><span class="header_menu_list">BRAND</span></li>
        <li><span class="header_menu_list">ABOUT</span></li>
        <li><span class="header_menu_list">NEWS</span></li>
        <li><span class="header_menu_list">CONTACT</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isOpenMenu: false
    }
  },
  methods: {
    openMenu () {
      this.isOpenMenu = true
    },
    closeMenu () {
      this.isOpenMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    .l_header{
        width: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        padding-top: get_vw(60);
        width: 85%;
        max-width:1296px;
        margin: 0 auto;
        z-index: 100;
        height:get_vw(40);
        @include tab {
            width: 90%;
            padding-top: get_vw(25,375);
        }
        .l_header__inner{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logo{
                width:get_vw(130);
                @include tab() {
                    width: get_vw(60,375);
                }
            }
            span{
                @include Marcellus();
                font-size: clamp(10px,get_vw(16),16px);
                cursor: pointer;
                @include tab() {
                    font-size: get_vw(14,375);
                }
            }
        }
    }
    .l_header__menu{
      width: 100vw;
      height: 100vh;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      transform: translateX(100%);
      transition: 1.5s;
      &::after{
          content: "";
          width: 1px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 7.5%;
          background-color: #000;
          @include tab{
              left: 5%;
          }
      }
      &-close{
          width: 85%;
          max-width:1296px;
          margin: 0 auto;
          padding-top: get_vw(60);
          text-align: right;
          cursor: pointer;
          @include tab() {
              width: 90%;
              padding-top: get_vw(25,375);
          }
          span{
              @include Marcellus();
              font-size: clamp(10px,get_vw(16),16px);
              @include tab () {
                  font-size: get_vw(16,375);
              }
          }
      }
      &-inner{
          width: 85%;
          margin: 0 auto;
          max-width: 1296px;
          position: relative;
          top: 45%;
          transform: translateY(-50%);
          padding: 0;
          list-style: none;
          padding-left: get_vw(45);
          @include tab () {
              padding-left: get_vw(60,375);
          }
          li{
              margin-bottom: get_vw(40);
              @include tab() {
                  margin-bottom: get_vw(50,375);
              }
              span{
                  @include Marcellus();
                  text-decoration: none;
                  font-size: clamp(10px,get_vw(60),60px);
                  cursor: none;
                  @include tablar() {
                      font-size: get_vw(110);
                  }
                  @include tab() {
                      font-size: get_vw(35,375);
                  }
              }
          }
      }
      &.active{
          transition: 1.5s;
          transform: translateX(0);
      }
    }
  }
</style>
