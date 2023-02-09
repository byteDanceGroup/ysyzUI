import Badge from './index.vue';
Badge.install = (app: { component: any }) => {
	app.component('ysyz-badge', Badge);
}
export default Badge;