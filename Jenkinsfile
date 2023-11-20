
pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
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