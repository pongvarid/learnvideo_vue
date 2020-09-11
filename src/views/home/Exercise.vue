<template>
<div class="h-screen overflow-hidden flex items-center justify-center ">

    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center ">
        <div class="bg-white text-gray-800 rounded-xl  overflow-hidden relative flex py-10" style="height:736px">
            <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">

                <div>
                    <h1 class="text-3xl font-bold">แบบทดสอบ  </h1>
                </div>

                <div class="py-4" v-for="ex,index in ask" :key="index">

                    <div>
                        <div class="pl-3 ">
                            <!-- <p class="text-xs text-gray-500 uppercase font-semibold">ART</p> -->
                            <h3 class="text-xl font-semibold leading-tight mb-3">{{ex.ask}}</h3>

                             <input v-model="ans[index]" type="radio" :id="`ans1a${index}`" :name="`ans1a${index}`" value="0">
                             <label class="ml-2" :for="`ans1a${index}`">A. {{ex.ans1}}</label><br><br>

                              <input v-model="ans[index]" type="radio" :id="`ans2a${index}`" :name="`ans2a${index}`" value="1">
                              <label class="ml-2" :for="`ans2a${index}`">B. {{ex.ans2}}</label><br><br>

                              <input v-model="ans[index]" type="radio" :id="`ans3a${index}`" :name="`ans3a${index}`" value="2">
                             <label class="ml-2" :for="`ans3a${index}`">C. {{ex.ans3}}</label><br><br>

                              <input v-model="ans[index]" type="radio" :id="`ans4a${index}`" :name="`ans4a${index}`" :value="3">
                             <label class="ml-2" :for="`ans4a${index}`">D. {{ex.ans4}}</label>
                        </div>
                    </div>
                    <hr class="border-gray-200 my-3">
                </div>
                <button @click="calculate()" class="bg-green-600 my-4 hover:bg-purple-700 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">ยืนยัน</button>

            </div>

        </div>
    </div>
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
            ask: [],
            ans:[],
            score : 0,

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
        ...call('exam/*'),
...call('auth/*'),
          async calculate(){
            for (let index = 0; index < this.ans.length; index++) {
                 if(this.ask[index].answer == this.ans[index]){
                     this.score++;
                 } 
            }
            alert(`คุณได้คะแนน ${this.score} คะแนน`); 
            await this.storeHistory({
                "user": this.user.pk,
                "score" : this.score,
                "exercise" : Number(this.$route.query.exercise)
            })
            alert('คะแนนบันทึกที่ ประวัติการทำแบบฝึกหัด แล้ว');
            await this.$router.go(-1)
        },
        
        /******* Methods default run ******/
        load: async function () {
             await this.getUser();
            let exerciseId = this.$route.query.exercise
            let ask = await this.getAsk(exerciseId);
            this.ask = ask.body.results
        }
    },
}
</script>

<style lang='postcss' scoped>

</style>
