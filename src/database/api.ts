
import { Alert } from 'react-native';

import * as Firebase from 'firebase';

import 'firebase/firestore';
import PublishBanner from '../components/PublishModal/PublishBanner';


const firebaseConfig = {
  apiKey: 'AIzaSyCpGGAJy6Bj3J3WMj6XaQaKDwopQAe4Wks',
  authDomain: 'fservices-a6dab.firebaseapp.com',
  databaseURL: 'https://fservices-a6dab.firebaseio.com',
  projectId: 'fservices-a6dab',
  storageBucket: 'fservices-a6dab.appspot.com',
  messagingSenderId: '704756424515',
  appId: '1:704756424515:web:868e5052202d244b87d9f6',
};

Firebase.initializeApp(firebaseConfig);


const db = Firebase.firestore();

export async function addCadastro(
  categoria: String,
  nome: String,
  nomeServico: String,
  whatsapp: String,
  tagsData: Array<String>,
  valorInicial: String,
  valorFinal: String,
  cidade: String,
  uf: String,
  visible: Boolean,
  setVisible: any
) {
  try {
    const docRef = await db.collection('servicos').add({
      categoria,
      nome,
      nomeServico,
      whatsapp,
      tagsData,
      valorInicial,
      valorFinal,
      cidade,
      uf,
      createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
    });
    if (!docRef) {
      return Alert.alert(
        'Tivemos um problema no servidor e o cadastro não foi feito'
      );
    }
    return PublishBanner();
  } catch (error) {
    return Alert.alert('Ocorreu um error');
  }
}

export async function getServicos(setData: any, setDataFilter: any) {
  let serviceList: Firebase.firestore.DocumentData[] = [];

  let snapshot = await db.collection('servicos').orderBy('createdAt').get();

  snapshot.forEach((doc) => {
    serviceList.push(doc.data());
  });

  setData(serviceList);
  setDataFilter(serviceList);
}
