pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('step-01') {
      parallel {
        stage('step-01') {
          steps {
            pwd()
          }
        }
        stage('allocate node') {
          steps {
            node(label: 'master')
          }
        }
      }
    }
    stage('step-02') {
      steps {
        echo '`export`'
      }
    }
  }
}