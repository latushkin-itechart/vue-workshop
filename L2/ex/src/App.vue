<template>
  <div id="app">
    <ToolPanel @search="searchQuery = $event"/>

    <div class="row" v-show="!currentArticle">
      <BlogItem
          v-for="item in filteredItems"
          :key="item.id"
          class="w-25"
          :item="item"
          @toggleLike="item.userLiked = !item.userLiked"
          @open="currentArticle = item"
      />
    </div>

    <div v-if="currentArticle">
      <BlogArticleContent @back="currentArticle = null">

        <p>{{ currentArticle.description }}</p>
        <p> Vitae suspendisse luctus at netus dolor habitasse a sed eu ante euismod condimentum adipiscing vestibulum
          cubilia.Suspendisse et a tristique ac habitasse fames cras egestas condimentum hendrerit dis ullamcorper ante
          scelerisque nibh semper posuere cras a a dis parturient nec class.Vel vestibulum magnis arcu semper quam mi
          proin vestibulum nec augue nec tristique dignissim mi in iaculis consectetur magnis taciti pharetra sem duis
          parturient.Nibh sem consectetur gravida consequat metus ridiculus a a montes sit habitasse non ante iaculis
          dui posuere interdum himenaeos cum vivamus in ac suspendisse.A parturient fringilla aptent massa dignissim
          viverra est orci parturient adipiscing amet dictumst vestibulum nascetur aenean.</p>

        <template v-slot:header>
          <h4>{{ currentArticle.title }}</h4>
        </template>

        <template #tools>
          <small>{{ currentArticle.published_at }}</small>
        </template>
      </BlogArticleContent>
    </div>
  </div>
</template>

<script>

import ToolPanel from "./components/ToolPanel";
import BlogItem from "./components/BlogItem";

import data from './articles';
import BlogArticleContent from "./components/BlogArticleContent";

export default {
  name: 'App',
  components: {
    BlogArticleContent,
    BlogItem,
    ToolPanel

  },
  data() {
    return {
      searchQuery: '',
      currentArticle: null,
      items: data.map((item) => ({...item, userLiked: false})),
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(({description}) => description.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
