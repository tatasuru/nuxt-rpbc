<template>
  <div class="main_contents">
    <div class="l_single_news">
      <div
      v-for="newsItem in newDataCurrent"
      :key="newsItem.id"
      class="news_contents">
        <p class="date">{{ $dayjs(newsItem.updatedAt).locale('ja').format('Do.MMM.YYYY') }}</p>
        <p class="ttl">{{newsItem.title}}</p>
        <div class="img">
          <img
          :src="newsItem.thumbnails"
          :alt="newsItem.title"
          >
        </div>
        <p class="txt">
          {{newsItem.body}}
        </p>
        <div class="btn btn_02">
          <a href="https://encircle.jp/" target="_blank">
            Brand site
            <img src="@/assets/images/common/more_arrow.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="pageTtl padding">
      <p class="bold">OTHER NEWS</p>
      <p class="small">ニュース一覧</p>
    </div>
    <div class="l_news flex">
      <div
      id="flex_box"
      class="flex_box">
        <nuxt-link
          v-for="newsItem in newsData"
          :key="newsItem.id"
          :to="`/news/${newsItem.id}`"
          class="contents news_contents other_news_contents"
          data-name="">
          <div class="img">
            <img
            :src="newsItem.thumbnails"
            :alt="newsItem.title"
            >
          </div>
          <div class="date">
            <p>{{ $dayjs(newsItem.updatedAt).locale('ja').format('Do.MMM.YYYY') }}</p>
          </div>
          <div class="txt">
            <p>{{newsItem.title}}</p>
          </div>
        </nuxt-link>
      </div>
      <a id="moreBtn"
      href=""
      class="moreBtn small">
        <div class="btn">
          <p>ニュース<br class="sp_contents">一覧</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ $config, $axios }) {
    const news = await $axios.$get(`${$config.baseURL}/wp-json/wp/api/news`)
    return {
      news
    }
  },
  data () {
    return {
      kvFlag: false
    }
  },
  computed: {
    newsData () {
      return this.news.data.filter((item, index) => {
        if (index >= 0 && index < 3) return item
        return false
      })
    },
    newDataCurrent () {
      return this.news.data.filter((item, index) => {
        if (index === (this.$route.params.id) - 1) return item
        return false
      })
    }
  },
  created () {
  },
  mounted () {
    console.log(this.newDataCurrent)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.l_news{
  margin: 0 auto get_vw(120);
  width: 85%;
  max-width: 1296px;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-bottom: get_vw(0);
  @include tab() {
    width: 90%;
    padding-bottom: get_vw(300,375);
    margin-bottom: get_vw(100,375);
  }
  &.flex{
    display: block;
    overflow: hidden;
    @include tab() {
      overflow: scroll;
      padding-right: get_vw(0,375);
      padding-bottom: get_vw(20,375);
      width: 100%;
    }
    .flex_box{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: get_vw(40);
      @include tab() {
          margin-bottom: get_vw(40,375);
      }
      .contents{
        max-width: 380px;
        width: get_vw(380);
        text-decoration: none;
        margin-bottom: get_vw(60);
        position: relative;
        &.active{
            display: block;
        }
        @include tab () {
          max-width: none;
          margin-bottom: get_vw(40,375);
          width: get_vw(160,375);
        }
        .img{
          width: 100%;
          height: get_vw(410);
          max-height: 410px;
          margin-bottom: get_vw(20);
          @include tab() {
            max-height: none;
            height: get_vw(160,375);
            margin-bottom: get_vw(5,375);
          }
          img{
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
        .date{
          margin-bottom: get_vw(10);
          @include tab () {
            margin-bottom: get_vw(10,375);
            margin-bottom: get_vw(0,375);
          }
          p{
            @include Sorts();
            font-size: clamp(10px,get_vw(16),16px);
            letter-spacing: 0.05em;
            color: #818281;
            @include tab () {
              font-size: get_vw(12,375);
            }
          }
        }
        .txt{
          width: 90%;
          @include tab () {
            width: 100%;
          }
          p{
            font-family: $fontFamilyYuMin;
            font-size: clamp(10px,get_vw(20),20px);
            @include tab () {
              font-size: get_vw(14,375);
            }
          }
        }
        &:hover{
          cursor: none;
        }
      }
    }
    .moreBtn {
      display: block;
      width: get_vw(180);
      height: get_vw(180);
      border-radius: 50%;
      transition: 0.5s;
      margin: 0 auto;
      cursor: pointer;
      @include tab() {
        width: get_vw(100,375);
        height: get_vw(100,375);
      }
      .btn{
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 50%;
        position: relative;
        @include tab() {
          border: 1px solid #000;
        }
        p{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          @include SortsRe();
          font-size: clamp(10px,get_vw(42),42px);
          @include tab() {
            font-size: get_vw(14,375);
          }
        }
      }
      &.small{
        width: get_vw(400);
        height: get_vw(180);
        // height: auto;
        @include tab() {
          width: get_vw(120,375);
          height: get_vw(120,375);
          text-align: center;
        }
        .btn{
          p{
            font-size: clamp(10px,get_vw(30),30px);
            font-family: $fontFamilyYuMin;
            @include tab() {
                font-size: get_vw(14,375);
            }
          }
        }
      }
    }
  }
}
.pageTtl{
  width: 85%;
  max-width: 1296px;
  margin: 0 auto;
  padding-top: get_vw(210);
  display: flex;
  align-items: center;
  margin-bottom: get_vw(80);
  &.padding{
    padding: 0;
  }
  @include tab{
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    padding-top: get_vw(130,375);
    margin-bottom: get_vw(40,375);
  }
  .bold{
    @include Marcellus();
    font-size: clamp(10px,get_vw(60),60px);
    color: #000;
    letter-spacing: 0.05em;
    @include tab() {
      font-size: get_vw(32,375);
      color: #000000;
    }
  }
  .small{
    margin-top: get_vw(15);
    display: inline-block;
    margin-left: get_vw(30);
    font-size: clamp(10px,get_vw(14),14px);
    font-family: $fontFamilyYuMin;
    color: #000;
    @include tab() {
      margin-left: 0;
      font-size: get_vw(14,375);
    }
  }
  &.other{
    flex-direction: column;
    margin-bottom: get_vw(175);
    @include tab() {
      margin-bottom: get_vw(80,375);
    }
    .small{
      margin-left: 0;
    }
  }
}
.l_single_news{
  padding-top: get_vw(210);
  margin: 0 auto;
  margin-bottom: get_vw(110);
  width: 85%;
  max-width: 1296px;
  @include tab() {
    width: 90%;
    padding-top: get_vw(130,375);
    margin-bottom: get_vw(80,375);
  }
  .news_contents{
    .date{
      margin-bottom: get_vw(10);
      @include Sorts();
      font-size: clamp(10px,get_vw(20),20px);
      letter-spacing: 0.05em;
      color: #818281;
      @include tab() {
          font-size: get_vw(14,375);
      }
    }
    .ttl{
      font-family: $fontFamilyYuMin;
      font-size: clamp(10px,get_vw(24),24px);
      margin-bottom: get_vw(80);
      @include tab() {
        font-size: get_vw(16,375);
        margin-bottom: get_vw(40,375);
      }
    }
    .img{
      width:get_vw(420);
      max-width: 420px;
      margin: 0 auto get_vw(80);
      @include tab() {
        width: 100%;
        max-width: none;
        margin: 0 auto get_vw(40,375);
      }
    }
    .txt{
      font-family: $fontFamilyYuMin;
      width:get_vw(960);
      max-width: 960px;
      margin: 0 auto;
      font-size: clamp(10px,get_vw(14),14px);
      line-height: 1.75;
      margin-bottom: get_vw(40);
      @include tab() {
        width: 100%;
        max-width: none;
        margin: 0 auto get_vw(40,375);
        font-size: get_vw(14,375);
      }
    }
    .btn{
      max-width: 960px;
      width: get_vw(960);
      margin: 0 auto;
      @include tab () {
        max-width: none;
        width: 100%;
      }
      a{
        position: relative;
        text-decoration: none;
        line-height: 1;
        @include SortsRe();
        font-size: clamp(10px,get_vw(16),16px);
        @include tab() {
          font-size: get_vw(16,375);
        }
        img{
          display: inline;
          width: get_vw(10);
          @include tab() {
            width: get_vw(10,375);
          }
        }
        &::after{
          content:"";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: #000;
          transition: width 1s;
        }
        &:hover{
          &::after{
            width: 100%;
            transition: width 1s;
          }
        }
      }
    }
  }
}
</style>
