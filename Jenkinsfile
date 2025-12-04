pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/microsoftalonso9/simple-python-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t simple-python-app:latest .'
                }
            }
        }

        stage('Run App') {
            steps {
                script {
                    bat 'docker stop simple-app || exit 0'
                    bat 'docker rm simple-app || exit 0'
                    bat 'docker run -d -p 5000:5000 --name simple-app simple-python-app:latest'
                }
            }
        }
    }
}
