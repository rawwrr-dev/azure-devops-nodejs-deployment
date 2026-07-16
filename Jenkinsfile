pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Repository cloned successfully'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t azure-node-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop azure-container || exit 0'
                bat 'docker rm azure-container || exit 0'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name azure-container azure-node-app'
            }
        }
    }
}