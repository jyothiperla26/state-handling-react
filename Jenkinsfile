pipeline {
  agent any

//   tools {
//     nodejs 'node'
//   }
  stages {
    stage('install dependencies'){
      steps{
        node(any){
          git 'https://github.com/jyothiperla26/state-handling-react.git'
          sh 'npm install'
        }
      }
    }
    stage('Build') {
      steps {
        node(any){
          git 'https://github.com/jyothiperla26/state-handling-react.git'
          sh 'npm start'
        }
      }
    }
    stage('Test') {
      steps {
        node(any){
          git 'https://github.com/jyothiperla26/state-handling-react.git'
          sh 'npm test'
        }
      }
    }
  }
}