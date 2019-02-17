pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run cy:run'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}

