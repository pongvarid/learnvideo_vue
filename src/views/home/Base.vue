<template>
<div>
    <nav class="bg-purple-800 p-2 mt-0 fixed w-full z-10 bottom-0">
        <div class="container mx-auto flex flex-wrap items-center">
            <!-- <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span class="text-2xl pl-2"><i class="em em-grinning"></i> Brand McBrandface</span>
                </a>
            </div> -->
            <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li class="mr-3">
                        <button @click="$router.push('/home/')" class="inline-block py-2 px-4 text-white no-underline" ><span class="mdi mdi-book-open text-xl"></span></button>
                    </li>
                    <li class="mr-3">
                        <button @click="$router.push('/home/profile')" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 text-md" ><span class="mdi mdi-account text-xl"></span></button>
                    </li>
                    <li class="mr-3">
                        <button @click="$router.push('/home/about')" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" ><span class="mdi mdi-information text-xl"></span></button>
                    </li>
                    <li class="mr-3">
                        <button @click="isLogout()" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" ><span class="mdi mdi-login text-xl"></span></button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div> 
<router-view />
        <br><br><br><br>
    </div>
    
</div>
</template>

<script>
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
        async isLogout(){
            let check = confirm('คุณแน่ใจใช่ไหมที่จะออกจากระบบ');
            if(check){
                  await this.$store.dispatch('auth/logout');
                await this.$router.replace('/')
                  location.reload();
            }
          
        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style lang='postcss' scoped>

</style>
