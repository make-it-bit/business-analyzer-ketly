import ButterCMS from 'buttercms';
const butterCMSClient = ButterCMS('438cf3c09f331dcbba0cab943829f12fff18b4a9');

export const getHomePageData = async () => {
  const {
    data: {
      data: { fields: HomePageData },
    },
  } = await butterCMSClient.page.retrieve('*', 'homepage', { preview: 1 });
  return HomePageData;
};
