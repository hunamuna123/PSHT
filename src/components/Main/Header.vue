<script>

</script>
<template>
  <div class="header__nav__container">
    <button type="button" class=" reg  btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Регистрация
</button>  
     <button type="button" class="login btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <svg
        width="13.400391"
        height="8.757507"
        viewBox="0 0 13.4004 8.75751"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <path
          id="Rectangle 8"
          d="M7.20703 0L13.4004 4.37883L7.20703 8.75751L6.39062 8.18019L12.1758 4.09015L12.584 4.37881L12.1758 4.66747L6.39062 0.577301L7.20703 0Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <path
          id="Vector 5"
          d="M0 4.38055L12.6133 4.38055"
          stroke="#FFFFFF"
          stroke-opacity="1.000000"
          stroke-width="1.000000"
        />
      </svg>
      Войти
    </button>
  </div>
  <div class="header__main">
    <h1>Портал для создания школьных тестов</h1>
    <p class="header__text__btn">Готовы решать задачи?</p>
    <button class="header__btn__go">
      <router-link to="/panel" tag="button" style="text-decoration: none; color: black;">Приступить</router-link>
                                    <svg
        width="15.003906"
        height="15.004089"
        viewBox="0 0 15.0039 15.0041"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <path
          id="Arrow 1"
          d="M0.296875 13.2929L13.2969 0.292892L14.7109 1.70711L1.71094 14.7071L0.296875 13.2929ZM1.71094 14.6788L1.71094 14.7071C1.31494 15.1031 0.692871 15.1031 0.296875 14.7071C-0.0991211 14.3111 -0.0991211 13.6889 0.296875 13.2929L0.325195 13.2929L1.71094 14.6788ZM13.0039 2L6.00391 2C5.44385 2 5.00391 1.56 5.00391 1C5.00391 0.440002 5.44385 0 6.00391 0L14.0039 0C14.564 0 15.0039 0.440002 15.0039 1L15.0039 9C15.0039 9.56 14.564 10 14.0039 10C13.4438 10 13.0039 9.56 13.0039 9L13.0039 2Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
      </svg>
    </button>
    <img
      src="https://cdn.discordapp.com/attachments/1197231307919466678/1212375309622448138/image.png?ex=65f19b7e&is=65df267e&hm=5fcadae9bf14803443436185da1c2fec84dcc8caa629d97e685f121711849294&"
      class="image_web_main"
    />
  </div>

</template>

<style>
.button {
  border: none;
  border-radius: 34px;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button.primary {
  color: white;
}

.button.secondary {
  color: black;
}

.reg {
  width: 114.5px;
  height: 31.94px;
  border-radius: 34px;
  text-decoration: none;
  color: black;
  border: none;
  background-color: white;
  margin-right: 20px;
}

.login {
  width: 114.5px;
  height: 31.94px;
  margin-right: 7px;
  background-color: rgb(56, 191, 242);
  text-decoration: none;
  border-radius: 34px;
  border: none;
}

.header__main {
  position: absolute;
  width: 638px;
  height: 92px;
  left: 404px;
  top: 133px;
}

.header__btn__go {
  position: absolute;
  width: 321px;
  height: 70px;
  left: 15px;
  top: 358px;
  border: none;
  border-radius: 82px;
  background: rgb(241, 85, 37);
  color: white;
}
.header__nav__container {
  position: absolute;
  width: 1705px;
  height: 53px;
  left: 141px;
  top: 37px;
  background-color: black;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 75px;
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.modal-container {
  z-index: 2;
}
h1 {
  color: rgb(34, 37, 59);
  font-size: 46px;
  font-weight: 660;
  line-height: 46px;
  letter-spacing: 0%;
  text-align: left;
}
.image_web_main {
  position: absolute;
  width: 390.89px;
  height: 408.15px;
  right: -96.62%;
  top: 32.59%;
}
.header__text__btn {
  position: absolute;
  width: 365.22px;
  height: 46px;
  left: 78px;
  top: 290.53px;
}
.btn {
  background-color: rgb(56, 191, 242) !important;
}
</style>
