pipeline {
  agent any

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