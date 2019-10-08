pipeline {
  agent {
    docker {
      image 'cypress/base:12.6.0'
    }
  }

  stages {
    
    stage('build') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npx cypress verify'
      }
    }

    stage('test') {
        steps {
            echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
            sh 'npx cypress run'
        }
        }
  }

  post {
    always {
        junit 'results/cypress-report.xml'
    }
 }
}
