import React from 'react';
import { ProfileCard, ProfileEditModal, ProfilePosts } from '@components/index';
import { MainLayout } from '@components/common/Layout';
import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { customAxios } from '@apis/base';
import { getProfile } from '@apis/profile';
import { useRouter } from 'next/router';

const Profile: NextPage = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const { data: profile } = useQuery([queryKeys.profile, userId], () =>
    getProfile(userId)
  );

  return (
    <MainLayout>
      {profile && <ProfileCard profile={profile} />}
      {profile && <ProfileEditModal profile={profile} />}
      {profile && <ProfilePosts profile={profile} />}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  customAxios.defaults.headers.Cookie = '';
  const queryClient = new QueryClient();
  const userId = context.params?.id;

  if (userId && cookie) {
    customAxios.defaults.headers.Cookie = cookie;

    await queryClient.prefetchQuery([queryKeys.profile, userId], () =>
      getProfile(Number(userId))
    );
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Profile;
