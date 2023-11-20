
pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install dependencies') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build the App') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test the unit') {
            steps {
              sh 'npm test'
            }
        }
    }
}