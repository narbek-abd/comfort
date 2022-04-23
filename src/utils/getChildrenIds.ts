interface list {
	id: number;
	children?: list[];
}

let ids: number[] = [];

export function getChildrenIds(list: list[]) {
	ids = [];

	__recursiveGetIds(list);

	return ids;
}

function __recursiveGetIds(list: list[]) {
	list.forEach((item) => {
		ids.push(item.id);

		if (item.children && item.children.length > 0) {
			__recursiveGetIds(item.children);
		}
	});
}
