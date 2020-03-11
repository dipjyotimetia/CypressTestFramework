String cypressBaseImage = 'cypress/base:12.6.0'
String cypressBrowsersImage = 'cypress/browsers:node12.14.0-chrome79-ff71'

pipeline {
  // agent {
  //   docker {
  //     image "${cypressBrowsersImage}"
  //   }
  // }
  agent {
        dockerfile {
            filename 'Dockerfile'
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
      environment {
          CYPRESS_KEY='we;flwjef;lewjf;lwe'
        }
        steps {
          echo "Running tests ${env.BUILD_ID} on ${env.JENKINS_URL}"
          sh 'npm run chrome:ci'
        }
      }
  }

    post {
      always {
        script{
          sh 'npm run combine-reports'
          sh 'npm run generate-report'
          sh 'npm run clean'
        }
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'results', reportFiles: 'report.html', reportName: 'WebUi Test Report', reportTitles: ''])
      }
    }
}
