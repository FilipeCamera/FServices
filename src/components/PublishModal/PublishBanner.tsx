import { AdMobInterstitial } from 'expo-ads-admob';

export default function PublishBanner() {
  async function publishBanner() {
    await AdMobInterstitial.setAdUnitID(
      'ca-app-pub-4288571417280592/7045024619'
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();

  }
  return publishBanner();
}
