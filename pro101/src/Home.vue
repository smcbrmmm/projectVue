<template>
  <div class="home">
    <section class="snow-bg"></section>
    <div class="jumbotron text-center head" style="font-family:Mitr">
      <h1 class="display-4">ศูนย์รับบริจาคเพื่อผู้ประสบภัย</h1>
      <p
        class="lead"
      >จัดทำขึ้นเพื่อเป็นหน่วยงานประสานงานและช่วยเหลือผู้ประสบภัยต่าง ๆ เช่น อุทกภัย และอัคคีภัย</p>
    </div>

    <div class="container text-center mb-3">
      <h1 class="text-header">ลงทะเบียน</h1>
    </div>

    <div class="container text-center mb-5">
      <router-link to="/donor"><button type="button" class="btn btn-lg mr-3 buttonChoose">
        ผู้บริจาค
      </button></router-link>
      <router-link to="/donor"><button type="button" class="btn btn-lg buttonChoose">
        ผู้ขอรับบริจาค
      </button></router-link>
    </div>

    <h4 class="container display-5 text-center mb-3 text-require"> ประเภทของการรับของบริจาค </h4>
    <div class="container row text-center" style="margin-left:auto;margin-right:auto">
      <div class="col-6">
        <div class="card" style="width: 18rem; margin-left:auto;margin-right:auto">
          <img
            src="src/assets/flood.png"
            class="card-img-top"
            style="width:100px ; height:100px ; margin-left:auto ; margin-right:auto"
          />
          <div class="card-body">
            <h5 class="card-title">อุทกภัย</h5>
            <p class="card-text">สิ่งที่ต้องการรับบริจาค</p>
            <ul>
              <li>อาหารแห้ง</li>
              <li>น้ำดื่ม</li>
              <li>ยารักษาโรค</li>
              <li>ยากันยุงและมุ้งพับได้</li>
              <li>ผ้าใบกันฝน</li>
              <li>เสื้อชูชีพ</li>
              <li>เทียนไขและไฟฉาย</li>
              <li>อาหารสัตว์</li>
            </ul>
            <button type="button" class="btn btn-lg text-white donate-button">บริจาคสิ่งของ</button>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="card" style="width: 18rem; margin-left:auto;margin-right:auto ">
          <img
            src="src/assets/fire.png"
            class="card-img-top"
            style="width:100px ; height:100px ; margin-left:auto ; margin-right:auto"
          />
          <div class="card-body">
            <h5 class="card-title">อัคคีภัย</h5>
            <p class="card-text">สิ่งที่ต้องการรับบริจาค</p>
            <ul>
              <li>น้ำดื่ม/เครื่องดื่มชูกำลัง</li>
              <li>อาหารแห้ง</li>
              <li>หน้ากาก N95</li>
              <li>ยากันยุงและมุ้งพับได้</li>
              <li>ถุงเท้าและรองเท้า</li>
              <li>คราด</li>
              <li>ผงโรยเท้า</li>
              <li>ไฟฉายใส่หัว</li>
            </ul>
            <button type="button" class="btn btn-lg text-white donate-button">บริจาคสิ่งของ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter";

export default {
  data() {
    return {
      value: 45,
      max: 100,
    };
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max;
    },
  },
};
</script>

<style>
</style>