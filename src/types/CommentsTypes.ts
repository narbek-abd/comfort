export interface CommentsTypes {
	id: number;
	name: string;
	email: string;
	user_id: string;
	text: string;
	created_at: string;
	parent_id: number;
	replies: CommentsTypes[];
}
