import React from 'react';

import { AdMobInterstitial } from 'expo-ads-admob';

import { Alert } from 'react-native';

export default function PublishBanner() {
  async function publishBanner() {
    await AdMobInterstitial.setAdUnitID(
      'ca-app-pub-4288571417280592/7045024619'
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();

    return Alert.alert('Cadastro Feito!!');
  }
  return publishBanner();
}
