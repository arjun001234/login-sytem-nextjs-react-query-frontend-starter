import React from "react";

type State = {
    error: Error | null
}

type Props = {
    children: React.ReactNode
    fallback: (error: Error) => React.ReactNode
}

class ErrorBoundary extends React.Component<Props, State> {
  public state : State = {
        error: null
  }
  public static getDerivedStateFromError(error: Error) : State {
      return {error: error}
  }
  render(){
      const {children,fallback} = this.props
      const {error} = this.state
      if (error){
          return fallback(error)
      }
      return children
  }
}

export default  ErrorBoundary

