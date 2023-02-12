import AnchorLink from './index.vue'

AnchorLink.install = (app: { component: any }) =>{
    app.component(AnchorLink.name, AnchorLink)
}
export default AnchorLink