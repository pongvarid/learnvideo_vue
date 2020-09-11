<template>
<div v-if="videoDetail.id">
    <video v-if="videoDetail.link" controls autoplay="true" :src="videoDetail.link_video"></video>
    <video v-else controls autoplay="true" :src="`https://www.learnvideo.ga/${videoDetail.video}`"></video>

    <div class="p-4">
        <h2 class="text-2xl">{{videoDetail.name}}</h2>
        <hr>
        <section v-html="videoDetail.body" class="p-4">

        </section>
 
       <button v-for="exe,index in exercises" :key="index"
       @click="$router.push(`/home/exercise?exercise=${exe.id}`)"
        class="bg-purple-600 my-4 hover:bg-purple-700 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" >
        {{exe.name}}
    </button>

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
            videoDetail: {},
            exercises:[],

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
        ...call('exam/*'),
        /******* Methods default run ******/
        load: async function () {
            let videoId = this.$route.query
            let videoDetail = await this.video(videoId.id);
            this.videoDetail = videoDetail.body;

            let exercises = await this.getExercise(videoId.id);
            this.exercises = exercises.body.results
            console.log(videoDetail.body);
        }
    },
}
</script>

<style lang='postcss' scoped>

</style>
