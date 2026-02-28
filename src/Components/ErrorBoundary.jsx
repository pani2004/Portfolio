import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-4">
                    <div className="max-w-2xl bg-gray-900 border border-red-500 rounded-lg p-8 text-white shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-red-500 rounded-full p-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-red-400">Oops! Something went wrong</h1>
                        </div>
                        
                        <p className="text-gray-300 mb-6">
                            We're sorry for the inconvenience. An error occurred while loading the page.
                        </p>
                        
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-6 bg-gray-800 rounded p-4">
                                <summary className="cursor-pointer text-red-400 font-semibold mb-2">
                                    Error Details (Development Only)
                                </summary>
                                <div className="text-sm text-gray-400 overflow-auto">
                                    <p className="font-mono mb-2">{this.state.error.toString()}</p>
                                    <pre className="text-xs whitespace-pre-wrap">
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </div>
                            </details>
                        )}
                        
                        <div className="flex gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                            >
                                Reload Page
                            </button>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="bg-gray-800 border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
                            >
                                Go to Home
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
