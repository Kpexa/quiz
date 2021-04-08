import React from 'react'
import classes from './Layout.module.css'

type LayoutProps = {
  children: JSX.Element
}

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div className={classes.layout}>
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
