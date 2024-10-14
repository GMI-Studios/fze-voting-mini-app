import { MockPost } from "@/types";

export async function MockPosts() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = (await res.json()) as MockPost[];

	return (
		<ul>
			{data.map((post) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	);
}
