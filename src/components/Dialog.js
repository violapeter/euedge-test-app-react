import React, {Component} from 'react'
import css from './Dialog.css'
import Button from './Button'
import Icon from './Icon'

export default class Dialog extends Component {
  handleSecondary () {
    if (this.props.onSecondary) this.props.onSecondary()
    this.props.onClose()
  }

  handlePrimary () {
    if (this.props.onPrimary) this.props.onPrimary()
    this.props.onClose()
  }

  render () {
    const { title, secondary, primary, children, opened, onClose } = this.props

    return <div className={`Dialog ${opened ? 'is-opened' : ''}`}>
      <div className='Dialog__box'>
        <Icon className='Dialog__close' icon='close' onClick={onClose} />
        {title ? <div className='Dialog__title'>{title}</div> : null}

        <div className='Dialog__content'>
          {children}
        </div>

        <div className='Dialog__actions'>
          {primary
            ? <Button onClick={() => this.handlePrimary()} level='primary'>{primary}</Button>
            : null}
          {secondary
            ? <Button onClick={() => this.handleSecondary()} level='secondary'>{secondary}</Button>
            : null}
        </div>
      </div>
    </div>
  }
}
