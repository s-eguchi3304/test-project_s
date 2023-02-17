import firebase from 'firebase/app'; //node_modulesからコアとなるfirebaseのパッケージをimportする、firebaseを使うなら必ずimportする必要がある
import 'firebase/firestore'; // firestoreを使いたいのでimportする
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCXZf97cMG-O-O0s0_dcUoNMdGa-wmIglE',
  authDomain: 'text-project-dev-8a555.firebaseapp.com',
  projectId: 'text-project-dev-8a555',
  storageBucket: 'text-project-dev-8a555.appspot.com',
  messagingSenderId: '530582552153',
  appId: '1:530582552153:web:3ea979bee424f17a46fb48',
};

// init firebase
firebase.initializeApp(firebaseConfig); // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore(); // firebaseのサービスも初期化する
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp; //firebaseのtimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp };
