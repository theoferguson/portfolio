import { createContextId } from "@builder.io/qwik";

export interface PostType {
    id: number;
    attributes: {
        title: string;
        shortDescription: string;
        longDescription: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        image: { data: any };
        video: { data: any };
        authors: { data: any };
        categories: { data: any }
    }
}

export const PostsContext = createContextId<PostType[]>('docs.posts-context');