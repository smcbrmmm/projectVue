<template>
  <div class="home">
    <section class="snow-bg"></section>
    <div class="jumbotron text-center head" style="font-family:Mitr">
      <h1 class="display-4">ศูนย์รับบริจาคเพื่อผู้ประสบภัย</h1>
      <p
        class="lead"
      >จัดทำขึ้นเพื่อเป็นหน่วยงานประสานงานและช่วยเหลือผู้ประสบภัยต่าง ๆ เช่น อุทกภัย และอัคคีภัย</p>
    </div>
    <h3 class="container text-center text-header">ลงทะเบียนผู้ประสงค์บริจาคสิ่งของ</h3>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block-input" id="basic-addon1" style>ชื่อนามสกุล</span>
          <input class="form-control" id="ex1" type="text" style="margin-left:2rem" />
        </div>
      </div>
    </div>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block-input" id="basic-addon1">เบอร์โทรติดต่อ</span>
          <input class="form-control" id="ex1" type="text" style="margin-left:1rem" />
        </div>
      </div>
    </div>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block-input" id="basic-addon1">อีเมลล์</span>
          <input class="form-control" id="ex1" type="text" style="margin-left:4rem" />
        </div>
      </div>
    </div>

    <div
      class="container form-group row text-center mt-4"
      style="margin-left:auto ; margin-right:auto"
    >
      <div class="col-xs-5" style="margin-left:auto ; margin-right:auto">
        <div class="input-group-prepend">
          <span class="input-group-text block-input">ที่อยู่ที่ติดต่อได้</span>
          <textarea class="form-control" aria-label="With textarea" style="margin-left:1rem"></textarea>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <button type="button" class="btn  btn-lg text-white mt-4 block-input">ยืนยันข้อมูล</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "samut",
      old: 12,
    };
  },
};
</script>

<style>
</style>