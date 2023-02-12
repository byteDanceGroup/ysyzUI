import Anchor from './index.vue'

Anchor.install = (app: { component: any }) =>{
    app.component(Anchor.name, Anchor)
}
export default Anchor