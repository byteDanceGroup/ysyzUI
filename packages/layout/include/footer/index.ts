import Footer from './index.vue'
Footer.install = (app: { component: any }) =>{
    app.component(Footer.name, Footer)
}
export default Footer