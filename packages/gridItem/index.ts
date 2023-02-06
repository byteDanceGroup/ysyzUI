import GridItem from './index.vue';
GridItem.install = (app: { component: any }) => {
	app.component('ysyz-grid-item', GridItem);
}
export default GridItem;
