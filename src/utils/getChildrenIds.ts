interface list {
	id: number;
	children?: list[];
}

let ids: number[] = [];
let finished = false;

export function getChildrenIds(list: list[]) {
	if (finished) {
		ids = [];
	}

	list.forEach((item) => {
		ids.push(item.id);

		if (item.children && item.children.length > 0) {
			getChildrenIds(item.children);
		}
	});

	finished = true;

	return ids;
}
