pipeline {
  agent any

  tools {
    node 'v20.9.0'
  }
  stages {
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