pipeline {
  agent {
    docker {
      image 'rizafahmi/node'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Test') {
      steps {
        sh 'node test.js'
      }
    }
  }
}
