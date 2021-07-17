import Vue from 'vue'
import VueRouter from 'vue-router'

const MainContainer = () => import("../view/main/MainContainer")
const TrashTime = () => import("../view/trashtime/TrashTime")
const AboutMe = () => import("../view/aboutme/AboutMe")
const TimeLine = () => import("../view/timeline/TimeLine")
const NoteDetail = () => import("../components/note/NoteDetail")

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: MainContainer
    },
    {
        path: "/trashtime",
        name: "trashtime",
        component: TrashTime
    },
    {
        path: "/timeline",
        name: "timeline",
        component: TimeLine
    },
    {
        path: "/aboutme",
        name: "aboutme",
        component: AboutMe
    },
    {
        path: "/detail",
        name: "notedetail",
        component: NoteDetail
    },
    {
        path: "/test",
        name: "test",
        component: () => import("../components/HelloWorld")
    }
]

export default new VueRouter({
    mode: "history",
    routes: routes
})