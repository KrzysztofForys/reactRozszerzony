import { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: { componentStack: string }) {
        console.error('Error caught by boundary:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-red-900/20 border border-red-800 rounded-lg m-6">
                    <h2 className="text-xl font-bold text-red-400 mb-2">Coś się popsuło</h2>
                    <p className="text-zinc-400 mb-4">{this.state.error?.message}</p>
                    <button
                        onClick={() => this.setState({ hasError: false, error: null })}
                        className="px-4 py-2 bg-red-800 hover:bg-red-700 rounded text-white"
                    >
                        Spróbuj ponownie
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}