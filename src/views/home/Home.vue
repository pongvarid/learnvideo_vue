<template>
<div class="overflow-hidden flex items-center justify-center" style="background: #edf2f7;">

    <div class=" bg-gray-200 flex items-center justify-center ">
        <div class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden   flex ">
            <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
                <div class="mb-3">
                    <h1 class="text-3xl font-bold">ล่าสุด</h1>
                    <p class="text-sm text-gray-500 uppercase font-bold">{{convert(videoLastest.created_at)}}</p>
                </div>
                <div class="mb-5" @click="gotoVideo(videoLastest.id)" >
                    <a href="#" @click="$router.push('/lessionA')" class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95" 
                    :style="`background: url(https://www.learnvideo.ga/${videoLastest.image}) center; background-size: cover;`">
                        <div class="absolute top-0 right-0 -mt-3 mr-3">
                            <div class="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i class="mdi mdi-fire text-base align-middle"></i> <span class="align-middle">ล่าสุด</span></div>
                        </div>
                        <div class="h-48"></div>
                        <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">{{videoLastest.name}}</h2>

                    </a>
                </div>

                <div class="mb-3">
                    <h1 class="text-3xl font-bold">บทเรียน</h1>
                </div> 
                <div v-for="video,index in videosList" :key="index" >
                    <hr class="border-gray-200 my-3">
                    <div @click="gotoVideo(video.id)" >
                        <a href="#" @click="$router.push('/lessionB')" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                            <div class="block h-24 w-2/5 rounded overflow-hidden" 
                            :style="`background: url(https://www.learnvideo.ga/${video.image}) center; background-size: cover;`"></div>
                            <div class="pl-3 w-3/5">
                                <!-- <p class="text-xs text-gray-500 uppercase font-semibold">ART</p> -->
                                <h3 class="text-md font-semibold leading-tight mb-3">{{video.name}}</h3>
                                <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                                    <div><span class="mdi mdi-video"></span> {{convert(video.created_at)}}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

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
            videosList: [],
            videoLastest: {}

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
         convert(date) {
            return moment(date).toNow();
        }, 
        async gotoVideo(id){    
            await this.$router.push(`home/video?id=${id}`);
        },
        /******* Methods default run ******/
        load: async function () {
            let video = await this.videos();
            this.videosList = video.body.results
            this.videoLastest = this.videosList[(this.videosList.length-1)]
            console.log(this.videoLastest );
        }
    },
}
</script>
