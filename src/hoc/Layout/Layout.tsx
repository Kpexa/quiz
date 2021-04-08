import React from 'react'

type LayoutProps = {
  children: JSX.Element
}

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div>
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
