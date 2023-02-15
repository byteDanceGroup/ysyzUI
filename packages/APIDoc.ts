interface apiTable {
	columns: Record<'title' | 'key', string>[],
	data: Record<string, any>[],
	pushToData: (...arg: string[]) => void;
}

export class PropsAPI implements apiTable {
	columns: Record<"title" | "key", string>[] = [
		{ title: '属性', key: 'attribute', },
		{ title: '说明', key: 'explaination', },
		{ title: '类型', key: 'type', },
		{ title: '默认值', key: 'defaultValue', }
	];

	data: Record<string, any>[] = [];

	pushToData(attribute: string, explaination: string, type: string, defaultValue: string) {
		this.data.push({
			attribute,
			explaination,
			type,
			defaultValue,
		});
	}
}

export class EventsAPI implements apiTable {
	columns: Record<"title" | "key", string>[] = [
		{ title: '事件名', key: 'eventName', },
		{ title: '说明', key: 'explaination', },
		{ title: '返回值', key: 'returnValue', }
	];

	data: Record<string, any>[] = [];

	pushToData(eventName: string, explaination: string, returnValue: string) {
		this.data.push({
			eventName,
			explaination,
			returnValue,
		});
	}
}

export class SlotsAPI implements apiTable {
	columns: Record<"title" | "key", string>[] = [
		{ title: '名称', key: 'slotName', },
		{ title: '说明', key: 'explaination', },
	];

	data: Record<string, any>[] = [];

	pushToData(slotName: string, explaination: string) {
		this.data.push({
			slotName,
			explaination,
		})
	}
}
