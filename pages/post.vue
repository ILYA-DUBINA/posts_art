<template>
  <div class="row p-2 text-center">
    <div class="p-2 col-md-8 offset-md-2">
      <div class="well blog">
        <h2>
          {{ list?.title }}
        </h2>
        <div class="">
          <div class="p-2">
            <div class="image">
              <img
                class="inside__content-img"
                :src="imgSrc()"
                alt="изображение картины"
              />
            </div>
          </div>
          <div class="p-2">
            <div class="blog-details text-lg-star">
              <p>
                {{ list?.description }}
              </p>
            </div>
            <div class="text-start">
              Дата публикации: {{ list['date-of-publication'] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <ul class="list-group list-group-flush text-start">
        <li
          v-for="comment in list?.comments"
          :key="comment.id"
          class="list-group-item m-1"
        >
          {{ comment.value }}
          <div class="text-end">
            <ul class="list-group list-group-flush text-start">
              <li
                v-for="downComment in comment.downValue"
                :key="downComment + Math.random()"
                class="list-group-item m-1"
              >
                {{ downComment }}
              </li>
            </ul>
            <label :for="comment.id" class="p-2"
              >Прокомментировать комментарий тут &#10549;</label
            >
            <textarea
              :id="comment.id"
              class="form-control m-1"
              rows="1"
              :value="quantityDown[comment.id]"
              @input="getDownValue($event, comment.id)"
            ></textarea>
            <button
              class="btn btn-primary"
              type="button"
              @click="getDownCommit(comment.id)"
            >
              Оставить подкомментарий
            </button>
          </div>
        </li>
      </ul>
      <div class="form-group">
        <label for="comment" class="p-2"
          >Прокомментировать статью тут &#8659;</label
        >
        <textarea
          id="comment"
          class="form-control m-2"
          rows="3"
          :value="quantity"
          @input="getValue($event)"
        ></textarea>
        <button class="btn btn-primary" type="button" @click="getCommit()">
          Оставить комментарий
        </button>
      </div>
      <nuxt-link to="/" class="btn btn-primary">
        <div @click="saveObject()">Назад к постам</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      list: {},
      quantity: '',
      quantityDown: {},
    }
  },
  mounted() {
    const obj = JSON.parse(localStorage.getItem('1'))
      ? JSON.parse(localStorage.getItem('1'))
      : {}
    this.list = obj
  },
  methods: {
    imgSrc() {
      try {
        return require(`@/static/image/${this.list.image}`)
      } catch (error) {
        return null
      }
    },
    createObject(value) {
      return {
        id: Math.random(),
        value,
        downValue: [],
      }
    },
    getDownCommit(id) {
      const idx = this.list.comments.findIndex((el) => el.id === id)
      const oldItem = this.list.comments[idx]
      oldItem.downValue = [...oldItem.downValue, this.quantityDown[id]]
      this.list.comments = [
        ...this.list.comments.slice(0, idx),
        oldItem,
        ...this.list.comments.slice(idx + 1),
      ]
      this.quantityDown[id] = ''
    },
    getCommit() {
      const obj = this.createObject(this.quantity)
      this.list.comments = [...this.list.comments, obj]
      this.quantity = ''
    },
    getDownValue: function (event, id) {
      this.quantityDown[id] = event.target.value
    },
    saveObject() {
      localStorage.setItem('2', JSON.stringify(this.list))
    },
    getValue: function (event) {
      this.quantity = event.target.value
    },
  },
}
</script>
<style></style>
