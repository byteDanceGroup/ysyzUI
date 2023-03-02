import DropdownItem from './index.vue';
DropdownItem.install = (app: { component: any }) => {
	app.component('ysyz-dropdown-item', DropdownItem);
}
export default DropdownItem;
