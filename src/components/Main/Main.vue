<script>
document.addEventListener("DOMContentLoaded", function() {
  let cards = document.querySelectorAll(".main__card1, .main__card2, .main__card3, .main__card4, .main__card5, .count__text1, .count__text2, .count__text3, .img__background__bup1 ");

  function checkScroll() {
    cards.forEach(card => {
      if (isElementInViewport(card) && !card.classList.contains("show")) {
        card.classList.add("show");
      } else if (!isElementInViewport(card) && card.classList.contains("show")) {
        card.classList.remove("show");
      }
    });
  }
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  window.addEventListener("scroll", checkScroll);
  // Check initially
  checkScroll();
});



</script>

<template>
  <div class="main__container">
    <h2 class="main__text">Портал ПСШТ - это удобно и результативно</h2>
    <div class="card__block">

      <div class="main__card1">
        <img
          src="https://cdn.discordapp.com/attachments/1197231307919466678/1212418848423149669/image.png?ex=65f1c40b&is=65df4f0b&hm=1f3f2dadc31da64f1885f981e4e772622e56a43e39ffdb69cea50a33db798e70&"
          class="main__card1__img"
          alt=""
          
        />
        <p class="card__text">Огромное количество практики</p>
        <p class="card__text__dop">
          Создавайте тесты и приглашайте учеников для их решения!
        </p>
      </div>
      <div class="main__card2">
        <img
          src="https://cdn.discordapp.com/attachments/1197231307919466678/1212419517112914081/image.png?ex=65f1c4aa&is=65df4faa&hm=d8f0d2964189e1ab938867db79f3c29943635e4dc6549d3481e1ae2d7ead0bef&"
          class="main__card2__img"
          alt=""
        />
        <p class="card__text">Гибкий график занятий</p>
        <p class="card__text__dop">
          Учитесь в любое время в удобном для вас темпе
        </p>
      </div>
      <div class="main__card3">
        <img
          src="https://cdn.discordapp.com/attachments/1197231307919466678/1212420687684182096/image.png?ex=65f1c5c1&is=65df50c1&hm=27a9f81d24a8142031d3ade18a30b93b57adfcd2eac665f33749ddebdd81715c&"
          class="main__card3__img"
          alt=""
        />
        <p class="card__text">Прямая связь с опытными учителями</p>
        <p class="card__text__dop">
          Задавайте вопросы и отправляйте свои ответы на проверку
        </p>
      </div>
      <div class="main__card4">
        <img
          src="https://cdn.discordapp.com/attachments/1197231307919466678/1212420807641399346/image.png?ex=65f1c5de&is=65df50de&hm=db11dadabf61e40fd7c319a29f6959d2af0fe83867238a1ef79783aa4445a070&"
          class="main__card4__img"
          alt=""
        />
        <p class="card__text">Современные методики обучения</p>
        <p class="card__text__dop">
          Спиральное обучение: погружаемся в материал постепенно, виток за
          витком
        </p>
      </div>
      <div class="main__card5">
        <img
          src="https://cdn.discordapp.com/attachments/1197231307919466678/1212421844125224970/image.png?ex=65f1c6d5&is=65df51d5&hm=7e4a4dae1ddf45ca1fca9ab97096567b065e0b74383c13b3a74003ca5da8f7cd&"
          class="main__card5__img"
          alt=""
        />
        <p class="card__text">Простое и понятный интерфейс</p>
        <p class="card__text__dop">
          Вместо заумных терминов – примеры из реального мира
        </p>
      </div>



    </div>

    <img
      src="https://cdn.discordapp.com/attachments/1197231307919466678/1212395646015901746/image.png?ex=65f1ae6f&is=65df396f&hm=940faf380f3d147b04249900f3abab8034a350b755d10a68b38adb1331d48d6a&"
      class="img__background"
      alt=""
    />
    <p class="card__text"></p>
    <p class="card__text__dop"></p>
    <img
      src="https://cdn.discordapp.com/attachments/1197231307919466678/1212413699462275113/image.png?ex=65f1bf3f&is=65df4a3f&hm=ecf9cd17458264625f5a7709f3a9e722821471c982941ee3669ee61ec508e442&"
      class="img__background__bup"
      alt=""
    />
    <p class="card__text"></p>
    <p class="card__text__dop"></p>
    <img
      src="https://cdn.discordapp.com/attachments/1197231307919466678/1212414568048099348/image.png?ex=65f1c00e&is=65df4b0e&hm=6f618098d3dd5ba1f0e809059d098eb9cbe7c5a846be3b132bdf62d0c71abffd&"
      class="img__background__bup1"
      alt=""
    />

    <p class="main__text__foot">Как происходить обучение на ПСШТ?</p>
    <p class="main__podtext__foot">
      Обучение должно быть комфортным. Поэтому мы разработали собственную
      платформу для обучения учеников.
    </p>

    <img
      src="https://cdn.discordapp.com/attachments/1211702230609166347/1212463553165000755/image.png?ex=65f1edad&is=65df78ad&hm=975898033ac6595993d53ccb6bb68b50f586d10d0acea9669e11d66011b31e9f&"
      alt=""
      class="main__notebook"
    />

    <div class="last__main__container">
      <p class="count__text1">01</p>
      <p class="text_in_count1">Быстрые и удобный интерфейс</p>
      <p class="text_in_text1">
        Теория и практика подаются маленькими порциями. Так вам будет легче
        усваивать новые знания.
      </p>

      <p class="count__text2">02</p>
      <p class="text_in_count2">Моментальная проверка ваших работ</p>
      <p class="text_in_text2">
        Все ваши работы будут моментально проверены учителем.
      </p>

      <p class="count__text3">03</p>
      <p class="text_in_count3">Нет ограничений по времени</p>
      <p class="text_in_text3">
        Можно совмещать учёбу с работой и другими делами. Не нужно выпрашивать
        академический отпуск, если пришлось сделать перерыв.
      </p>
    </div>
  </div>
</template>

<style>
.img__background {
  position: absolute;
  left: 280px;
  height: 1412.5px;
  top: 578px;
}
.img__background__bup {
  position: absolute;
  width: 37px;
  height: 37px;
  left: 960px;
  top: 578px;
}
.img__background__bup1 {
  /* Arrow 5 */
  position: absolute;
  width: 13px;
  left: 972px;
  top: 590px;
}
.main__text {
  /* Обучение в YtYt – это удобно и результативно */
  position: absolute;
  width: 598px;
  height: 92px;
  left: 675px;
  right: 595px;
  top: 710px;
  bottom: 2236px;
  z-index: 1;
  color: rgb(34, 37, 59);
  font-size: 46px;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0%;
  text-align: center;
}
.main__card1 {
  /* Rectangle 288 */
  position: absolute;
  width: 270px;
  height: 254px;
  left: 650px;
  right: 938px;
  top: 855px;
  bottom: 1929px;
  border-radius: 30px;
  z-index: 1;
  background: rgb(234, 242, 245);
  display: flex;
  justify-content: center;
  text-align: center;
}
.main__card2 {
  /* Rectangle 289 */
  position: absolute;
  width: 270px;
  height: 254px;
  left: 1070px;
  right: 518px;
  top: 855px;
  bottom: 1929px;
  border-radius: 30px;
  z-index: 1;
  background: rgb(234, 242, 245);
  display: flex;
  justify-content: center;
  text-align: center;
}
.main__card3 {
  /* Rectangle 292 */
  position: absolute;
  width: 270px;
  height: 254px;
  left: 492px;
  right: 1096px;
  top: 1142px;
  bottom: 1642px;
  border-radius: 30px;
  z-index: 1;
  background: rgb(234, 242, 245);
  display: flex;
  justify-content: center;
  text-align: center;
}
.main__card4 {
  /* Rectangle 290 */
  position: absolute;
  width: 270px;
  height: 254px;
  left: 868px;
  right: 720px;
  top: 1144px;
  bottom: 1640px;
  border-radius: 30px;
  z-index: 1;
  background: rgb(234, 242, 245);
  display: flex;
  justify-content: center;
  text-align: center;
}
.main__card5 {
  /* Rectangle 291 */
  position: absolute;
  width: 270px;
  height: 254px;
  left: 1250px;
  right: 311px;
  top: 1142px;
  bottom: 1642px;
  border-radius: 30px;
  z-index: 1;
  background: rgb(234, 242, 245);
  display: flex;
  justify-content: center;
  text-align: center;
}

.main__card1__img {
  position: absolute;
  width: 57.4px;
  height: 57.4px;
  left: 105px;
  top: 50px;
}
.main__card2__img {
  position: absolute;
  width: 57.4px;
  height: 57.4px;
  left: 105px;
  top: 50px;
}
.main__card3__img {
  position: absolute;
  width: 57.4px;
  height: 57.4px;
  left: 105px;
  top: 50px;
}
.main__card4__img {
  position: absolute;
  width: 57.4px;
  height: 57.4px;
  left: 105px;
  top: 50px;
}
.main__card5__img {
  position: absolute;
  width: 57.4px;
  height: 57.4px;
  left: 105px;
  top: 50px;
}

.card__text {
  color: rgb(34, 37, 59);
  font-size: 20px;
  font-weight: 400;
  line-height: 18.5px;
  letter-spacing: 0%;
  text-align: center;
  top: 130px;
  position: absolute;
}
.card__text__dop {
  color: rgb(34, 37, 59);
  font-size: 16px;
  font-weight: 400;
  line-height: 18.5px;
  letter-spacing: 0%;
  text-align: center;
  top: 180px;
  position: absolute;
}

.main__text__foot {
  /* Как происходит обучение на YtYt? */
  position: absolute;
  width: 933px;
  height: 46px;
  left: 554px;
  right: 391px;
  top: 1519px;
  bottom: 1473px;
  color: rgb(34, 37, 59);
  font-size: 46px;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0%;
  text-align: center;
}

.main__podtext__foot {
  position: absolute;
  width: 642px;
  height: 70px;
  left: 679px;
  right: 906px;
  top: 1592px;
  bottom: 1376px;
  color: rgb(34, 37, 59);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
}

.main__notebook {
  /* Group 1178 */
  position: absolute;
  width: 762.26px;
  height: 442.05px;
  left: 621px;
  right: 477.74px;
  top: 1711px;
  bottom: 884.95px;
}

.last__main__container {
  /* Rectangle 295 */
  position: absolute;
  width: 1160px;
  height: 349px;
  left: 400px;
  right: -486px;
  top: 2222px;
  bottom: -2222px;
  border-radius: 40px;
  box-shadow: 0px 81px 120px -77px rgba(34, 37, 59, 0.04);
  background: rgb(255, 255, 255);
}
.count__text1 {
  /* 01 */
  position: absolute;
  width: 109px;
  height: 53px;
  top: 50px;
  left: 50px;
  color: rgb(56, 191, 242);
  font-size: 77px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}
.count__text2 {
  /* 01 */
  position: absolute;
  width: 109px;
  height: 53px;
  top: 50px;
  left: 450px;
  color: rgb(56, 191, 242);
  font-size: 77px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}

.count__text3 {
  /* 01 */
  position: absolute;
  width: 109px;
  height: 53px;
  top: 50px;
  left: 850px;
  color: rgb(56, 191, 242);
  font-size: 77px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}

.text_in_count1 {
  top: 125px;
  position: absolute;
  width: 266px;
  height: 60px;
  left: 50px;
  right: 355px;
  color: rgb(34, 37, 59);
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}

.text_in_count2 {
  position: absolute;
  width: 266px;
  height: 60px;
  top: 125px;
  left: 450px;
  right: 355px;
  color: rgb(34, 37, 59);
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}

.text_in_count3 {
  top: 125px;
  position: absolute;
  width: 266px;
  height: 60px;
  left: 850px;
  right: 355px;
  color: rgb(34, 37, 59);
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}

.text_in_text1 {
  left: 50px;
  top: 200px;
  position: absolute;
  width: 232px;
  height: 88px;
  color: rgb(34, 37, 59);
  font-size: 16px;
  text-align: left;
}
.text_in_text2 {
  top: 200px;
  left: 450px;
  position: absolute;
  width: 232px;
  height: 88px;
  color: rgb(34, 37, 59);
  font-size: 16px;
  text-align: left;
}

.text_in_text3 {
  top: 200px;
  left: 850px;
  position: absolute;
  width: 232px;
  height: 88px;
  color: rgb(34, 37, 59);
  font-size: 16px;
  text-align: left;
}

/* Ваш CSS стиль для карточек */
.main__card1,
.main__card2,
.main__card3,
.main__card4,
.main__card5,
.count__text1,
.count__text2,
.count__text3,
.img__background__bup1 {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}



/*background*/
</style>
