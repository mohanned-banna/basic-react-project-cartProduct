import  { Component } from 'react'

 class ErrorBoundary extends Component {
    state = { hasError: false };
    render() {
         return this.props.children;
    }
}

export default ErrorBoundary
