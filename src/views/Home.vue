<template>
<div class="body-bg h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style="font-family:'Lato',sans-serif;">
    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-4 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-bold text-2xl">มัลติมีเดียเพื่อพัฒนาสมรรถนะทางการทดสอบ</h3>
            <p class="text-gray-600 pt-2">ณ จุดดูแลผู้ป่วย ของบุคลากรทางการแพทย์ที่ปฏิบัติงาน ณ โรงพยาบาลส่งเสริมสุขภาพตำบล</p>
        </section>

        <section class="mt-10">
            <form @submit.prevent="" class="flex flex-col">
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Username</label>
                    <input v-model="form.username" type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <input v-model="form.password"  type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>

                <button @click="getLogin()" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200">เข้าสู่ระบบ</button>
                <div class="flex justify-end my-2">
                    <a href="#" @click="registerDialog = true" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">สมัครสมาชิก</a>
                </div>
            </form>
        </section>
    </main>
    <vs-dialog   v-model="registerDialog" blur>
        <template #header>
            <h4 class="not-margin">
                สมัครสมาชิก
            </h4>
        </template>

        <div class="con-form">
            
            <form @submit.prevent="getRegister">
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">ชื่อผู้ใช้</label>
                    <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">ชื่อ</label>
                    <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">สกุล</label>
                    <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">อีเมล์</label>
                    <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">รหัสผ่าน</label>
                    <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
                 <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">ยืนยันรหัสผ่าน</label>
                    <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div> 
                    <button @click="$router.push('menu')" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 w-full">สมัครสมาชิก</button>
            </form>
            
            
        </div>
 
    </vs-dialog>
</div>
</template>

<script>
import {call,sync} from 'vuex-pathify';
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            registerDialog:true,
            formReg:{},
            form:{},
            txt: 'Hello World'

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
      ...call('auth/*'),
        /******* Methods default run ******/
        load: async function () {},
        async getLogin(){
          let reg = await this.register(this.form);
        },
        async getRegister(){
          let reg = await this.register(this.formReg);
        },
    },
}
</script>

<style lang='postcss' scoped>

</style>
