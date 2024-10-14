import {
	Key,
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
	AwaitedReactNode,
} from "react";

export async function MockPosts() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	return (
		<ul>
			{data.map(
				(post: {
					id: Key | null | undefined;
					title:
						| string
						| number
						| bigint
						| boolean
						| ReactElement<any, string | JSXElementConstructor<any>>
						| Iterable<ReactNode>
						| ReactPortal
						| Promise<AwaitedReactNode>
						| null
						| undefined;
				}) => (
					<li key={post.id}>{post.title}</li>
				)
			)}
		</ul>
	);
}
