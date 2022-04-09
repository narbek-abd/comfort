export interface CategoryTypes {
	id: number;
	name: string;
	slug: string;
	parent_id: number;
	children?: CategoryTypes[];
}

export interface CategoryFormTypes {
	name: string;
	parent_id: number;
}
