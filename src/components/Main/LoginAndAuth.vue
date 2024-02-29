<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const register = () => {
createUserWithEmailAndPassword(getAuth(), email.value, password.value)  
    .then((data) => {
      console.log("ура ты зарегался");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
}





































</script>


<template>
<!-- Модальное окно -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Войти в учетную запись.</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Имя</label>




    <input type="emael" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="emailLogin">





    <div id="emailHelp" class="form-text">E-mail</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Класс</label>



    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="passwordLogin">












    <div id="emailHelp" class="form-text">например (9, 8..).</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
  </div>
  <button @click="login" class="btn btn-primary">Отправить</button>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

<!-- Кнопка-триггер модального окна -->

<div class="modal-container">
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="exampleModalLabel">Регистрация</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Имя</label>


    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">


    <div id="emailHelp" class="form-text">Мы никогда никому не передадим ваши данные.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Класс</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">например (9, 8..).</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>

    <input type="password" class="form-control" id="exampleInputPassword1"  v-model="password">


  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
  </div>
  <button @click="register" class="btn btn-primary">Отправить</button>
</form> 
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</div>


</template>


<style>

</style>
