import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
    return { postId: params.postId };
}

export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
    return (
        <div>
            <h1>Post</h1>
            <p>Post id {loaderData.postId}</p>
        </div>
    );
}
