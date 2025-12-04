pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/microsoftalonso9/simple-python-app.git',
                    credentialsId: 'github-creds'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t simple-python-app:latest .'
                }
            }
        }

        stage('Run App') {
            steps {
                script {
                    sh 'docker stop simple-app || true'
                    sh 'docker rm simple-app || true'
                    sh 'docker run -d -p 5000:5000 --name simple-app simple-python-app:latest'
                }
            }
        }
    }
}

