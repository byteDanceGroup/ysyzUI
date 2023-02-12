import Header from './index.vue'
Header.install = (app: { component: any }) =>{
    app.component(Header.name, Header)
}
export default Header