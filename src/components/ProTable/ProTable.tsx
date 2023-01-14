import {defineComponent} from 'vue';
import {Table} from 'ant-design-vue';

const ProTable = defineComponent({
	props: {},
	setup() {
		return () => <Table/>;
	}
});

export default ProTable;
