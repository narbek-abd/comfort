export interface CategoryTypes {
	id: number;
	name: string;
	slug: string;
	parent_id: number;
	parent: CategoryTypes;
	children?: CategoryTypes[];
}
