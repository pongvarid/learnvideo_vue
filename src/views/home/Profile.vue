<template>
 <div class="h-screen overflow-hidden flex flex-col " style="font-family:'Lato',sans-serif;">   
     
    <main class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex-col  py-10">
       
       
        <section class="p-4">
            <h3 class="font-bold text-2xl h-full w-full  ">โปรไฟล์</h3> 
        </section>

        <section class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto relative">
            <form @submit.prevent="updateUserProfile()" class="flex flex-col"  >
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">ชื่อ</label>
                    <input v-model="user.first_name" type="text" value="User-Name" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3">
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">สกุล</label>
                    <input  v-model="user.last_name"  type="text" value="User-Surname" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3">
                </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">อีเมล์</label>
                    <input disabled v-model="user.email"  type="email" value="user@email.com" id="password"  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3">
                </div>
                   <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">ชื่อผู้ใช้</label>
                    <input disabled  v-model="user.username"  type="text" value="user@email.com" id="password"  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3">
                </div>
               
              
                <button type="submit"  class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"  >แก้ไข</button>
          
            </form>  <br>  
            <form @submit.prevent="changePasswordProfile()" class="flex flex-col">
                     <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">รหัสผ่านใหม่</label>
                    <input type="password"  v-model="form.new_password1"    required 
                     class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3">
                </div>
              
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">ยืนยันรหัสผ่านใหม่</label>
                    <input type="password"  v-model="form.new_password2"  required
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3">
                </div>
             <button type="submit"  class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"  >เปลี่ยนรหัสผ่าน</button>
          
            </form>
            <br>
            <hr>
            
              <section class="p-4">
            <h3 class="font-bold text-2xl h-full w-full  ">ประวัติการทำแบบฝึกหัด</h3> <br>
            <button  @click="historyDialog = true" class="w-full  bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"  >ดูประวัติ</button>
          <br><br>
        </section>
        </section>
    </main>

     <vs-dialog v-model="historyDialog" blur>
        <template #header>
            <h4 class="not-margin">
                ประวัติการทำแบบฝึกหัด
            </h4>
        </template>

        <div class="con-form">

           <div class="m-2 rounded-xl" v-for="his,index in history" :key="index">
               <h2 class="text-2xl">{{his.exercise.name}}</h2>
               <h3 class="text-xl">{{his.score}} คะแนน</h3>
               <h4>{{convert(his.created_at)}}</h4>
               <hr>
           </div>

        </div>

    </vs-dialog>
</div>
</template>

    
<script>
import {
    call,
    sync
} from 'vuex-pathify';
import moment from 'moment';
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

            txt: 'Hello World',
            form:{},
            historyDialog:false,
            history:[],
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
        ...sync('auth/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('auth/*'),
         convert(date) {
            return moment(date).toNow();
        }, 
        async changePasswordProfile(){
            let data = await this.updatePassword(this.form);
            if (!data.status) {
                this.$vs.notification({
                    color:'danger', 
                    title: 'เปลี่ยนรหัสผ่านไม่สำเร็จ',
                    text: `โปรดตรวจสอบข้อมูลให้ถูกต้อง`
                })
            }else{
                 this.$vs.notification({
                    color:'success', 
                    title: 'เปลี่ยนรหัสผ่านสำเร็จ'
                })
                this.form = {}
            }
        },
        async updateUserProfile(){
            let data = await this.updateUser();
            console.log(data);
              if (!data.pk) {
                this.$vs.notification({
                    color:'danger', 
                    title: 'เปลี่ยนข้อมูลไม่สำเร็จ',
                    text: `โปรดตรวจสอบข้อมูลให้ถูกต้อง`
                })
            }else{
                 this.$vs.notification({
                    color:'success', 
                    title: 'เปลี่ยนข้อมูลสำเร็จ'
                })
                this.form = {}
            }
        },
        /******* Methods default run ******/
        load: async function () {
            await this.getUser();
            let history = await this.getHistory(this.user.pk)
            this.history =  history.body.results

        }
    },
}
</script>

<style lang='postcss' scoped>

</style>
