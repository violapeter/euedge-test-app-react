import React, { Component } from 'react'
import css from './Dialog.css'
import Button from './Button'
import Icon from './Icon'

export default class Dialog extends Component {
  constructor () {
    super()

    this.state = {
      isOpened: false
    }
  }

  close () {
    this.setState({ isOpened: false })
  }

  handleSecondary () {
    if (typeof this.props.secondaryAction === 'function') this.props.secondaryAction()
    this.close()
  }

  handlePrimary () {
    if (typeof this.props.primaryAction === 'function') this.props.primaryAction()
    this.close()
  }

  render () {
    const { title, secondary, primary, children } = this.props

    return <div className={`Dialog ${this.state.isOpened ? 'is-opened' : ''}`}>
      <div className="Dialog__box">
        <Icon className='Dialog__close' icon='close' />
        {title ? <div className="Dialog__title">{title}</div> : null}

        <div className="Dialog__content">
          {children}
        </div>

        <div className="Dialog__actions">
          {secondary
            ? <Button onClick={() => this.handleSecondary()} type='secondary'>{secondary}</Button>
            : null}
          {primary
            ? <Button onClick={() => this.handlePrimary()} type='primary'>{primary}</Button>
            : null}
        </div>
      </div>
    </div>
  }
}
