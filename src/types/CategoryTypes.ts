export interface CategoryTypes {
	id: number;
	name: string;
	children?: CategoryTypes[];
}