import React from 'react';
import { PostType } from '@lib/index';
import { Wrapper, HashTag } from './style';
import Link from 'next/link';
import { SEARCH_PAGE } from '@consts/route';

interface Props {
  post: PostType;
}

const PostContent = ({ post }: Props) => {
  return (
    <Wrapper>
      {post.content.split(/(#[^\s#]+)/g).map((v: string, index: number) => {
        if (!v.match(/(#[^\s#]+)/)) {
          return <span key={index}>{v}</span>;
        }
      })}
      <HashTag>
        {post.Hashtags?.map((el) => (
          <Link href={`${SEARCH_PAGE}/${el.name}`} key={el.name}>
            <span>#{el.name}</span>
          </Link>
        ))}
      </HashTag>
    </Wrapper>
  );
};

export default PostContent;
