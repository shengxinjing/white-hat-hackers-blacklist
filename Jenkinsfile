pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('step-01') {
      steps {
        pwd()
      }
    }
    stage('step-02') {
      steps {
        echo '`export`'
      }
    }
  }
}