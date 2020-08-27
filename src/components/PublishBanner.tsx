import { AdMobInterstitial } from 'expo-ads-admob';

export default function PublishBanner() {
  async function publishBanner() {
    await AdMobInterstitial.setAdUnitID(
      'ca-app-pub-3940256099942544/1033173712'
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  return publishBanner();
};

