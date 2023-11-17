pipeline {
  agent any

  tools {
    nodejs 'node'
  }
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