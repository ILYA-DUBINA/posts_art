<template>
  <li class="row p-2">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="well blog">
        <nuxt-link to="post">
          <div class="row" @click="getIdCard(list.id)">
            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
              <div class="image">
                <img
                  class="inside__content-img"
                  :src="require(`@/static/image/${list.image}`)"
                  alt="изображение картины"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="blog-details">
                <h2>
                  {{ list.title }}
                </h2>
                <p>
                  {{ list.description.substring(0, 50) + "..." }}
                </p>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "CardComponent",
  components: {},
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    getIdCard(id) {
      this.$emit("getIdCard", id);
    },
  },
};
</script>

<style>
.blog .image {
  height: 250px;
  overflow: hidden;
  border-radius: 3px 0 0 3px;
}
.blog .image img {
  width: 100%;
  height: auto;
}
.blog .date {
  top: -10px;
  z-index: 99;
  width: 65px;
  right: -10px;
  height: 65px;
  padding: 10px;
  position: absolute;
  color: #ffffff;
  font-weight: bold;
  background: #5bc0de;
  border-radius: 999px;
}
.blog .blog-details {
  padding: 0 20px 0 0;
}
.blog {
  padding: 0;
}
.well {
  border: 0;
  padding: 20px;
  min-height: 63px;
  background: #fff;
  box-shadow: none;
  border-radius: 3px;
  position: relative;
  max-height: 100000px;
  border-bottom: 2px solid #ccc;
}
.blog .blog-details h2 {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.blog .date .blog-number {
  color: #fff;
  display: block;
  font-size: 24px;
  text-align: center;
}
</style>
