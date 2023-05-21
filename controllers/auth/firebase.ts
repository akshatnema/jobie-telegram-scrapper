// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app"
import dotenv from "dotenv"

dotenv.config()

const firebaseAppSecrets = JSON.parse(process.env.FIREBASE as string)

const firebaseAuth = () => {
    const firebaseConfig = {
        apiKey: firebaseAppSecrets['apiKey'],
        authDomain: firebaseAppSecrets['authDomain'],
        databaseURL: firebaseAppSecrets['databaseURL'],
        projectId: firebaseAppSecrets['projectId'],
        storageBucket: firebaseAppSecrets['storageBucket'],
        messagingSenderId: firebaseAppSecrets['messagingSenderId'],
        appId: firebaseAppSecrets['appId'],
        measurementId: firebaseAppSecrets['measurementId']
      };
      
      // Initialize Firebase
      const app: FirebaseApp = initializeApp(firebaseConfig);
    
      return app
}

export default firebaseAuth