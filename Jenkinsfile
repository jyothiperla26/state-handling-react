pipeline {
  agent any

//   tools {
//     node 'v20.9.0'
//   }
  stages {
    stage('install dependencies'){
      steps{
        node{
          sh 'npm install'
        }
      }
    }
    stage('Build') {
      steps {
        node{
          sh 'npm start'
        }
      }
    }
    stage('Test') {
      steps {
        node{
          sh 'npm test'
        }
      }
    }
  }
}