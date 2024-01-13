<template>
  <div id="app">
    <div class="app__content">
      <BodyComponent :artlist="artList" @getIdCard="getIdCard" />
    </div>
  </div>
</template>

<script>
import BodyComponent from "../components/BodyComponent.vue";

export default {
  name: "App",
  components: {
    BodyComponent,
  },
  data() {
    return {
      artList: [
        {
          id: 1,
          title: "«Рождение Венеры»",
          description:
            "Картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.",
          image: "art1.jpg",
          "date-of-publication": "05.06.2022",
          comments: [],
        },
        {
          id: 2,
          title: "«Тайная вечеря»",
          description:
            "Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495-1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане. Ранее ошибочно называлась фреской, однако было установлено, что роспись выполнена не фреской, и не «а-секко», а в особой технике, придуманной художником: яичной темперой по масляному грунту из свинцовых белил",
          image: "art2.jpg",
          "date-of-publication": "05.08.2023",
          comments: [],
        },
        {
          id: 3,
          title: "«Сотворение Адама»",
          description:
            "Картина Микеланджело «Сотворение Адама» создана в 1511 году. Представлена история о наделении Богом жизнью первого мужчины — Адама. Жизненная искра передаётся от пальца Создателя к пальцу человека. Описание картины Микеланджело «Сотворение Адама». Работа расположена в прямоугольнике, размер —3х6 м. Мускулистая мужская фигура поражает красотой. Адам неспешно протягивает руку к Богу.",
          image: "art3.jpg",
          "date-of-publication": "12.07.2023",
          comments: [],
        },
        {
          id: 4,
          title: "«Урок анатомии»",
          description:
            "Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека. Труп — Адриаан Адриаанс по прозвищу Арис Киндт (Малыш).В своё время он тяжело ранил в Утрехте тюремного охранника и в Амстердаме избил и ограбил человека.За это 31 января 1632 года он был повешен и передан для публичной аутопсии амстердамской гильдии хирургов.",
          image: "art4.jpg",
          "date-of-publication": "18.01.2022",
          comments: [],
        },
      ],
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("2")) !== null) {
      const obj = JSON.parse(localStorage.getItem("2"));
      const idx = this.artList.findIndex((el) => el.id === obj.id);
      this.artList = [...this.artList.slice(0, idx), obj, ...this.artList.slice(idx + 1)];
    }
  },
  methods: {
    getIdCard(id) {
      const idx = this.artList.findIndex((el) => el.id === id);
      this.objNew = this.artList[idx];

      localStorage.setItem("1", JSON.stringify(this.objNew));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap");

body {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  background: #eee;
}
p {
  font-size: 14px;
  color: #777;
}
a {
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;

  color: #555555;
}
* {
  box-sizing: border-box;
}
</style>
