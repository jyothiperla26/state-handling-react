pipeline {
  agent any

//   tools {
//     node 'v20.9.0'
//   }
  stages {
    stage('install dependencies'){
      steps{
        node(any){
          sh 'npm install'
        }
      }
    }
    stage('Build') {
      steps {
        node(any){
          sh 'npm start'
        }
      }
    }
    stage('Test') {
      steps {
        node(any){
          sh 'npm test'
        }
      }
    }
  }
}