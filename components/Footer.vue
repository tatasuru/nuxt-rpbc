<template>
<footer class="footer">
    <div class="l_footer">
      <div class="l_footer__inner">
        <div class="logo">
            <nuxt-link to="/">
                <img src="@/assets/images/common/logo.png" alt="">
            </nuxt-link>
            <nuxt-link
            v-scroll-to="'#header'"
            class="topBtn_sp sp_contents"
            to>BACK TO TOP</nuxt-link>
        </div>
        <ul>
            <li class="menu"><span>TOP</span></li>
            <li class="menu"><span>ABOUT</span></li>
            <li class="menu"><span>NEWS</span></li>
            <li class="menu"><span>BRAND</span></li>
            <li class="menu"><span>CONTACT</span></li>
        </ul>
        <nuxt-link
          v-scroll-to="'#header'"
          class="topBtn"
          to>BACK to TOP</nuxt-link>
      </div>
      <p>@RP Brand Creation inc.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.footer{
  .l_footer{
      padding-top: get_vw(60);
      padding-bottom: get_vw(15);
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      border-top: 1px solid #000000;
      @include tab() {
          padding-top: get_vw(40,375);
          padding-bottom: get_vw(15,375);
      }
      .l_footer__inner{
          width: 85%;
          max-width:1296px;
          margin: 0 auto get_vw(60);
          display: flex;
          justify-content: space-between;
          align-items: center;
          @include tab() {
              width: 92%;
              display: block;
          }
          .logo{
              cursor: pointer;
              width:get_vw(130);
              position: relative;
              @include tab () {
                  margin-bottom: get_vw(40,375);
                  width: 100%;
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between;
                  img{
                      width: get_vw(60,375);
                  }
                  .topBtn_sp{
                      @include SortsRe();
                      font-size:get_vw(14,375);
                  }
              }
          }
          ul{
              display: flex;
              list-style: none;
              padding: 0;
              margin-left: get_vw(200);
              @include tablar() {
                  margin-left: get_vw(100);
              }
              @include tab() {
                  margin-left: 0;
                  justify-content: space-between;
                  margin: 0 auto;
                  margin-bottom: get_vw(40,375);
                  width: 96%;
              }
              li{
                  margin-right: get_vw(30);
                  &:nth-last-child(1){
                      margin-right: 0;
                  }
                  span{
                      @include Marcellus();
                      font-size: clamp(10px,get_vw(14),14px);
                      text-decoration: none;
                      position: relative;
                      &::after{
                        content: "";
                        width: 0;
                        height: 1px;
                        background-color: #000;
                        position: absolute;
                        bottom: -2px;
                        left: 0;
                        transition: width 0.5s;
                      }
                      &:hover{
                        cursor: pointer;
                        &::after{
                            content: "";
                            width: 100%;
                            height: 1px;
                            background-color: #000;
                            position: absolute;
                            bottom: -2px;
                            left: 0;
                            transition: width 0.5s;
                        }
                      }
                      @include tab() {
                          font-size: get_vw(14,375);
                      }
                  }
              }
          }
          .topBtn{
              display: block;
              @include SortsRe();
              font-size: clamp(10px,get_vw(14),14px);
              letter-spacing: 0.03em;
              white-space: nowrap;
              @include tab() {
                  font-size: get_vw(14,375);
                  display: none;
              }
          }
      }
      p{
          text-align: right;
          width: 85%;
          max-width: 1296px;
          margin: 0 auto;
          @include Cormorant();
          font-size: clamp(10px,get_vw(14),14px);
          @include tab() {
              font-size: get_vw(14,375);
          }
      }
  }
}
</style>
