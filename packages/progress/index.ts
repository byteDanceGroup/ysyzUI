import Progress from './index.vue'
Progress.install = (app: { component: any }) =>{
    app.component(Progress.name, Progress)
}
export default Progress