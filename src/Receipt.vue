<template>
  <div class="home">
    <div class="jumbotron text-center head" style="font-family:Mitr">
      <router-link to="/"><h1 class="display-4 header">ศูนย์รับบริจาคเพื่อผู้ประสบภัย</h1></router-link>
      <p
        class="lead"
      >จัดทำขึ้นเพื่อเป็นหน่วยงานประสานงานและช่วยเหลือผู้ประสบภัยต่าง ๆ เช่น อุทกภัย และอัคคีภัย</p>
    </div>
    <h3 class="container text-center text-header">ลงทะเบียนผู้ประสงค์ขอรับบริจาคสิ่งของ</h3>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block" id="basic-addon1" style>ชื่อหน่วยงาน</span>
          <input class="form-control" id="ex1" v-model="name" type="text" style="margin-left:2rem" />
        </div>
      </div>
    </div>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block" id="basic-addon1">เบอร์โทรติดต่อ</span>
          <input class="form-control" id="ex1" v-model="tel" type="text" style="margin-left:1rem" />
        </div>
      </div>
    </div>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block" id="basic-addon1">อีเมลล์</span>
          <input class="form-control" id="ex1" v-model="email" type="text" style="margin-left:4rem" />
        </div>
      </div>
    </div>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block">ที่อยู่ที่ติดต่อได้</span>
          <textarea
            class="form-control"
            aria-label="With textarea"
            v-model="address"
            style="margin-left:1rem"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="container text-center" >
      <button
        type="button"
        class="btn btn-lg text-white mt-2 block-input"
        @click="showAlert"
      >ยืนยันข้อมูล</button>
    </div>

    <div class="container" v-if="checkStatus==false">
      กรุณาใส่ข้อมูลให้ครบถ้วน
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tel: "",
      email: "",
      address: "",
      checkStatus: true,
    };
  },
  methods: {
    checkInformation() {
    },
    
  },
};
</script>

<style>
</style>