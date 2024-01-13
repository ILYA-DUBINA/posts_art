<template>
  <div class="body">
    <div class="body__content">
      <h1 class="body__content-title">Все доступные посты</h1>
      <div class="body__content-cards">
        <ul class="cards__items">
          <CardComponent
            v-for="list in artlist"
            :key="list.id"
            :list="list"
            @getIdCard="getIdCard"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from './Card/CardComponent.vue'

export default {
  name: 'BodyComponent',
  components: {
    CardComponent,
  },
  props: {
    artlist: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    getIdCard(id) {
      this.$emit('getIdCard', id)
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.body {
  max-width: 1332px;
  min-height: calc(100vh - 240px);

  margin: 0 auto;
  padding: 0 101px 0 15px;
}
.body__content-title {
  font-family: Merriweather;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;

  margin: 45px 0 39px 0;
  padding: 0 0 0 0;

  color: #343030;
}
.cards__items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
