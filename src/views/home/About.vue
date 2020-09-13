<template>
<div class="overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
  <main class="bg-white   p-8    shadow-2xl">
        <section>
            <h3 class="font-bold text-xl"><b>{{aboutText.title}}{{aboutText.text}}</b></h3> 
        </section>
    <hr>
        <section class="mt-10" v-html="aboutText.body">
            <h2>Application version Mockup 1.0</h2>
        </section>
    </main> 

</div>
</template>

<script>
import {
    call,
    sync
} from 'vuex-pathify';
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
            aboutText:{},
            
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
        load: async function () {
             let about = await this.about();
            this.aboutText = about.body.results[0]
        },
      
    },
}
</script>

<style lang='postcss' scoped>

</style>
