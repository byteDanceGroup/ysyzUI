import Dropdown from './index.vue';
Dropdown.install = (app: { component: any }) => {
	app.component('ysyz-dropdown', Dropdown);
}
export default Dropdown;
