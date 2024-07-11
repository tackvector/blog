const posts = import.meta.glob("/src/routes/**/*.svx");

export const load = async ({ params }) => {
    try {
        const path = `/src/routes/${params.page}/${params.slug}.svx`;
        const importPosts = posts[path];

        if (!importPosts) {
            throw new Error(`Posts not found in: ${path}`);
        }

        const post = await importPosts();
        const { metadata, default: content } = post;

        return {
            props: {
                title: metadata.title,
                date: metadata.date,
                content
            }
        };
    } catch (error) {
        console.log("Something went wrong.", error);
    }
}