<template>
  <div class="content-modal message">
    <div class="mask"></div>
    <div class="modal">
        <span class="close" @click="close2()">
        <img src="@/assets/cerrar.png" alt />
      </span>
        <div class="card card-muni card-muni-min">
          <div class="text-center activacion-correcta">
              <h3>¡El usuario fue registrado con éxito!</h3>
            <div class="centrarimg">
               <img src="../../assets/success.png" alt /> 
            </div>
            <h4>Se le envió un correo a <span></span> con las instrucciones para activar su cuenta.
            <br />
            </h4>
            <div class="stylebtn">
              <router-link class="btn btn-block btn-lg btn-primary" to="/">Aceptar</router-link>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close2() {
    this.$router.push({ path: "/" });
    //var correo = localStorage.getItem('flagActivado')
    }
  }
};
</script>

<style lang="scss" scoped>
.stylebtn{
    padding-left: 25%;
    padding-top: 5%;
    }
h3{
    color: #0078cf;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
}
h4{
    color: #0078cf;
    font-size: 12px;
    text-align: center;
}

.centrarimg{
    position: relative;
    left: 27%;
    }

.content-modal.message {
  .modal {
    border-radius: 30px;
    min-width: 280px;
    max-width: 280px;
    margin: auto;
    z-index: 9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 50px;
    background: white;
    .b-block button{
      width: 100%;
    }
    .element-two {
      display: flex;
      & >div:first-child {
        width: 30%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
      & >div:last-child {
        width: 70%;
        max-width: 45%;
      }
      & > div {
        padding: 0 33px;
      }
      h1 {
        margin-bottom: 30px;
      }
    }
    .element-center {
      text-align: center;
    }
    .close {
      position: absolute;
      right: 10px;
      cursor: pointer;
      top: 10px;
    }
    .event-button {
      margin-bottom: 0;
      margin-top: 40px;
    }
    .description {
      padding-bottom: 30px;
    }
    .description2 {
      margin-top: 30px;
      font-size: 14px;
      line-height: 1.5;
    }
    .el-form-item__label {
      line-height: normal;
    }
  }
  .mask {
    background: #0000009e;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
@media only screen and (max-width: 600px) {
  .content-modal.message {
    .modal {
      top: 0;
      transform: none !important;
      left: 0;
      position: absolute;
      width: 100%;
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      .element-center {
        padding: 30px;
      }
    }
  }
}
</style>