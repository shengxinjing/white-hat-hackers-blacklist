<template>
  <div class="page">

     <!-- <div  v-if="$page.frontmatter.list">

      <div class="content">

        <template v-for="c in company">
          h
          <h2>{{c.title}}</h2>
          <ul>
            <li v-for="href in c.hrefs">{{href.title}}</li>
          </ul>
        </template>
       <pre>
      {{$page|json}}
            
          </pre>
      </div>
   
    </div>  -->
    <Content :custom="false"/>
    <!-- <div class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
        <OutboundLink/>
      </div>
      <div class="last-updated" v-if="lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </div> -->

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
          ← <router-link v-if="prev" class="prev" :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link> →
        </span>
      </p>
    </div>
    <slot name="bottom"/>
    <!-- <div id="SOHUCS" sid="id" ></div>  -->
    <div id="github-comment"></div>
  </div>
</template>

<script>
import { resolvePage, normalize, outboundRE, endingSlashRE } from './util'
// import 'gitment/style/default.css'
// import Gitment from 'gitment'
// import 'gitalk/dist/gitalk.css'
// import Gitalk from 'gitalk'


export default {
  data(){
    return{
      company:[]
      // descs:
    }
  },
  props: ['sidebarItems'],
  mounted(){
    console.log(this.$page)
    this.company = this.$page.frontmatter.company
    this.init(location.pathname)

    this.$router.afterEach(trans=>{
      if(trans.path!==location.pathname){
        this.init(trans.path)
      }
    })
    // console.log(this.$router)
    // gitment.render('github-comment')
    // function changefn
    // window.removeEventListener('hashchange')
    // window.addEventListener('hashchange', () => {
    //   console.log('change')
    
    
      
    //   // this.transitionTo(...)
    // })

    // (function(){ 
    // let appid = 'cytoUBPhR'; 
    // let conf = 'prod_e9c3098361c8007ab622a289cead0727'; 
    // let width = window.innerWidth || document.documentElement.clientWidth; 
    // if (width < 960) { 
      // window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("https://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })(); 
  },
  computed: {
    lastUpdated () {
      if (this.$page.lastUpdated) {
        return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)
      }
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },
    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },
    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },
    editLink () {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)
      if (endingSlashRE.test(path)) {
        path += 'README.md'
      } else {
        path += '.md'
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
      }
    },
    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      )
    }
  },
  methods: {
    init(path){
        // var gitment = new Gitment({
        //   id:location.origin+location.pathname,
        //   // id: '页面 ID', // 可选。默认为 location.href
        //   owner: 'shengxinjing',
        //   // repo: 'https://github.com/shengxinjing/blog-comment',
        //   repo:"my_blog",
        //   oauth: {
        //     client_id: '6267f611f5d1cfc47824',
        //     client_secret: 'b2eb8562b6aa805429378a2802622e2074f5bec8',
        //   },
        // })
// const gitalk = new Gitalk({
//   clientID: '6267f611f5d1cfc47824',
//   clientSecret: 'b2eb8562b6aa805429378a2802622e2074f5bec8',
//   repo: 'my_blog',
//   owner: 'shengxinjing',
//   admin: ['shengxinjing'],
//   id: location.pathname,      // Ensure uniqueness and length less than 50
//   distractionFreeMode: false  // Facebook-like distraction free mode
// })

        // gitment.render('github-comment')
    },
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '') +
           `/${docsBranch}` +
           (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
           path +
           `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`

      return (
        base.replace(endingSlashRE, '') +
        `/edit/${docsBranch}` +
        (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
        path
      )
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  items.forEach(item => {
    if (item.type === 'group') {
      res.push(...item.children || [])
    } else {
      res.push(item)
    }
  })
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === page.path) {
      return res[i + offset]
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
@require './styles/wrapper.styl'
#github-comment{
  width:90%;
  margin:0 auto !important;
}
.page
  padding-bottom 2rem

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left

</style>
