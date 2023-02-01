import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { FollowLayout, FollowUserList } from '@components/Follow';
import { GetServerSideProps } from 'next';
import {
  dehydrate,
  QueryClient,
  useQueryClient,
  useMutation,
} from 'react-query';
import { useInfiniteScroll } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';
import { getFollowings } from '@apis/follow';
import { FollowUserType } from '@lib/types';
import { useRouter } from 'next/router';
import { removeFollowing } from '@apis/user';

const Following: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const queryClient = useQueryClient();

  const { ref, resultData: followers } = useInfiniteScroll<FollowUserType[]>(
    queryKeys.following,
    getFollowings,
    userId
  );

  const { mutate } = useMutation(removeFollowing, {
    onSuccess: () => {
      alert('팔로잉을 삭제했습니다');
      queryClient.invalidateQueries(queryKeys.following);
    },

    onError: (error) => {
      alert(error);
    },
  });

  const handleDelteFollowing = (followId: number) => () => {
    mutate(followId);
  };

  return (
    <>
      {followers && (
        <FollowUserList
          followUsers={followers}
          handleDeleteFollow={handleDelteFollowing}
        />
      )}
      <div ref={ref}>d</div>
    </>
  );
};

Following.getLayout = function getLayout(page: ReactElement) {
  return <FollowLayout>{page}</FollowLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const userId = context.params?.id;

  await queryClient.prefetchInfiniteQuery(queryKeys.following, () =>
    getFollowings({ lastId: 0, optionId: Number(userId) })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Following;
