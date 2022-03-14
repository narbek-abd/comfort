export interface CategoryTypes {
	id: number;
	name: string;
	parent_id: number;
	children?: CategoryTypes[];
}