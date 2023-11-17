pipeline {
  agent { docker { image 'node:20.9.0-alpine3.18' } }

//   tools {
//     nodejs 'Node'
//   }
  stages {
    stage('build') {
      steps {
        sh 'node --version'
      }
    }
    stage('install dependencies'){
      steps{
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm start'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}