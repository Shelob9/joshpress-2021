import { createElement, FC } from "react"
export type hLevel = 2 | 3 | 4;
export interface ContentObject { raw?:string, rendered:string }
export interface ContentObjectPropsWithHLevel extends ContentObject {
    hLevel: hLevel
}
const RenderWithFallback : FC<ContentObject> = ({raw,rendered}) => {
    function createMarkup() {
        return { __html: rendered };
    };
    //if (!raw) { 
        return <div dangerouslySetInnerHTML={createMarkup()} />
    //}
}

export const PostExcerpt: FC<ContentObject> = (props) => <RenderWithFallback  {...props} />

export const PostTitle: FC<ContentObjectPropsWithHLevel> = ({ hLevel, raw, rendered }) => (
    <>
        {createElement(`h${hLevel}`, {}, [
            <RenderWithFallback raw={raw} rendered={rendered} key={1} />
        ])}
    </>
);

export const PostContent: FC<ContentObject> = (props) => <RenderWithFallback  {...props} />

type POST = {
    id: number;
    title: ContentObject;
    content: ContentObject;
    excerpt: ContentObject,
}
export const PostSummary: FC<{ post: POST }> = ({ post }) => {
    return (
        <article>
            {createElement(PostTitle, {
                ...post.title,
                hLevel:2
            })}
            {createElement(PostExcerpt,post.excerpt)}
        </article>
    )
}

export const Post: FC<{ post: POST,hLevel:hLevel }> = ({ post,hLevel }) => {
    return (
        <article>
            {createElement(PostTitle, { ...post.title, hLevel })}
            {createElement(PostContent,post.excerpt)}
        </article>
    )
}