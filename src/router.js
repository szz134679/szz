import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import ('./views/Home.vue')
const About = () =>
    import ('./views/About.vue')
const Demo1 = () =>
    import ('./views/Demo1.vue')
const Demo2 = () =>
    import ('./views/Demo2.vue')
const Demo3 = () =>
    import ('./views/Demo3.vue')
const Demo4 = () =>
    import ('./views/Demo4.vue')
const Demo5 = () =>
    import ('./views/Demo5.vue')
const Demo6 = () =>
    import ('./views/Demo6.vue')
const Demo7 = () =>
    import ('./views/Demo7.vue')
const Demo8 = () =>
    import ('./views/Demo8.vue')
const Demo9 = () =>
    import ('./views/Demo9.vue')
const Demo10 = () =>
    import ('./views/Demo10.vue')
const Demo11 = () =>
    import ('./views/Demo11.vue')
const Demo12 = () =>
    import ('./views/Demo12.vue')
const Demo13 = () =>
    import ('./views/Demo13.vue')
const Demo14 = () =>
    import ('./views/Demo14.vue')
const Demo15 = () =>
    import ('./views/Demo15.vue')
const Demo16 = () =>
    import ('./views/Demo16.vue')
const Demo17 = () =>
    import ('./views/Demo17.vue')
const Demo18 = () =>
    import ('./views/Demo18.vue')
const Demo19 = () =>
    import ('./views/Demo19.vue')
const Demo20 = () =>
    import ('./views/Demo20.vue')
const Detail = () =>
    import ('./views/Detail.vue')
const NotFound = () =>
    import ('./views/404.vue')

Vue.use(Router)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: Demo1
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: Demo2
    },
    {
        path: '/demo3',
        name: 'demo3',
        component: Demo3
    },
    {
        path: '/demo4',
        name: 'demo4',
        component: Demo4
    },
    {
        path: '/demo5',
        name: 'demo5',
        component: Demo5
    },
    {
        path: '/demo6',
        name: 'demo6',
        component: Demo6,
        beforeEach(to, form, next) {
            console.log('beforeEach:????????????demo6')
            next()
        }
    },
    {
        path: '/demo7',
        name: 'demo7',
        component: Demo7,
        //?????????
        // redirect: 'demo6'
        //?????? ????????????????????????demo7???demo7777
        alias: "demo7777"
    },
    {
        path: '/demo8',
        name: 'demo8',
        component: Demo8
    },
    {
        path: '/demo9',
        name: 'demo9',
        component: Demo9
    },
    {
        path: '/demo10',
        name: 'demo10',
        component: Demo10
    },
    {
        path: '/demo11',
        name: 'demo11',
        component: Demo11
    },
    {
        path: '/demo12',
        name: 'demo12',
        component: Demo12
    },
    {
        path: '/demo13',
        name: 'demo13',
        component: Demo13
    },
    {
        path: '/demo14',
        name: 'demo14',
        component: Demo14
    },
    {
        path: '/demo15',
        name: 'demo15',
        component: Demo15
    },
    {
        path: '/demo16',
        name: 'demo16',
        component: Demo16
    },
    {
        path: '/demo17/:id(\\d+)?/:type?',
        // path: '/demo17',
        meta: {
            title: "??????demo17"
        },
        name: 'demo17',
        component: Demo17,
        beforeEach(to, form, next) {
            console.log('beforeEach:????????????demo17')
            next()
        },
        children: [{
            //?????????:*???????????????detail,???????????????
            path: ':detail',
            name: 'detail',
            component: Detail
        }]
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/demo18',
        name: 'demo18',
        component: Demo18
    },
    {
        path: '/demo19',
        name: 'demo19',
        component: Demo19
    },
    {
        path: '/demo20',
        name: 'demo20',
        component: Demo20
    },
];



const router = new Router({
    //??????????????????????????????
    mode: 'history', //html5 API???history
    // base: process.env.BASE_URL,
    base: "/",
    routes
})

//??????????????????????????? 
//??????????????????????????????
router.beforeEach((to, from, next) => {
    //to ????????????
    //from ???????????????
    //next ????????????next??????,??????????????????
    //??????next(). ???????????????to???????????????
    //??????next(false).????????? ?????????????????????
    //??????next(xxx),?????????xxx??????
    // $ { //to and from are Route Object,next() must be called to resolve the hook}

    // }
    console.log('beforeEach:???????????????' + to.fullPath + '??????')
    next()
        //     if (to.name === 'demo6') {
        //         next('demo5');
        //     } else {
        //         next();
        //     }
});
//?????????????????????????????? 
router.afterEach((to, from) => {

    //     ${//these hooks do not get a next function and cannot affect the navigation}

    // }
    console.log("??????")
    console.log('afterEach:?????????' + to.path + '??????')
});

export default router;