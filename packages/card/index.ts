import Card from './index.vue'
Card.install = (app: { component: any }) =>{
    app.component(Card.name, Card)
}
export default Card