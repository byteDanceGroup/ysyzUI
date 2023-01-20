import Button from './index.vue'
Button.install = (app: { component: any }) =>{
    app.component(Button.name, Button)
}
export default Button