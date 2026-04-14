import { getCollection, type CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

/**
 * Retrieve and sort our blog posts for display.
 */
export const getSortedBlogPosts = async (): Promise<BlogPost[]> => {
	const posts = await getCollection("blog");

	return posts.slice().sort(sortByPublishDateDescending);
};

/**
 * Sort given blog posts by publish date, descending.
 */
const sortByPublishDateDescending = (a: BlogPost, b: BlogPost): number => {
	return getTimestamp(b) - getTimestamp(a);
};

/**
 * Retrieve an explicit timestamp for a post.
 */
const getTimestamp = (post: BlogPost): number => {
	return new Date(post.data.pubDate).getTime();
};
