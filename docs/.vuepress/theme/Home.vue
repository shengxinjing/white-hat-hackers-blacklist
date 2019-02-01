<template>
  <div class="home">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
      <h1>{{ data.heroText || $title || 'Hello' }}</h1>
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>
    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        
        <h2>
          <a :href="feature.href"> {{ feature.title }}</a>
         
        </h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <Content custom/>
    
    <!-- <div>
      <h2>最新文章</h2>
      <h3 v-for='article in articles'>
        <span class="description">
        {{article.create_time}} >> 

        </span>


      <a
          class="nav-link"
          :href="article.body"
        >{{ article.title }}
      
      </a>
      <Badge type='' :text="article.comments+'条评论'"/>

      </h3>
    </div> -->
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'
import axios from 'axios'
import articles from './article.json'
export default {
  data(){
    return {
      articles:[]
    }
  },
  methods:{
    // jump(url){
    //   console.log(url)
    //   console.log(this.$router)
    //   this.$router.push(url)
    // }
  },
  components: { NavLink },
  async mounted(){
    // axios.defaults.headers.common['Authorization'] = "5de13e577661d05daaa9995a4c60d46d4f5c81c7"
    try{
      // const issues = await axios.get('https://api.github.com/repos/shengxinjing/my_blog/issues?access_token=5de13e577661d05daaa9995a4c60d46d4f5c81c7')
      // const articles = issues.data.filter(v=>v.author_association=="OWNER"&&v.created_at.slice(0,4)>'2017')
      this.articles = articles.map(v=>{
        const obj = {
          title:v.title.split('|')[0],
          create_time:v.created_at.slice(0,10),
          body:v.body.slice(22).split('\n').join(''),
          comments:v.comments+'',
          

        }
        return obj
      })
      console.log(this.articles)
      // console.log(issues.data)
    }catch(e){
      console.log(e)
    }

    // console.log(this.$site)
    // const articles = 
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

span.description
  color: #6a8bad !important;
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  .hero
    text-align center
    img
      max-height 300px
      display block
      margin 1rem auto 1rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
