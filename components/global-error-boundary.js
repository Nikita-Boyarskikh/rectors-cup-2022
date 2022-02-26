import React from 'react';

import GlobalError from 'pages/_global-error';

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <GlobalError />
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary