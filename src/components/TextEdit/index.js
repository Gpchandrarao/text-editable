import {Component} from 'react'

import './index.css'

class TextEdit extends Component {
  state = {
    isEdit: false,
    textInput: '',
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickEdit = () => {
    this.setState({isEdit: false})
  }

  onClickSave = () => {
    this.setState({isEdit: true})
  }

  renderEditable = () => {
    const {textInput} = this.state

    return (
      <>
        <p className="text-para">{textInput}</p>
        <button type="button" className="button" onClick={this.onClickEdit}>
          Edit
        </button>
      </>
    )
  }

  renderInput = () => {
    const {textInput} = this.state

    return (
      <>
        <input
          className="input"
          type="text"
          value={textInput}
          onChange={this.onChangeInput}
        />
        <button type="button" className="button" onClick={this.onClickSave}>
          Save
        </button>
      </>
    )
  }

  render() {
    const {isEdit} = this.state
    return (
      <div className="container">
        <div className="text-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="main-container">
            {isEdit ? this.renderEditable() : this.renderInput()}
          </div>
        </div>
      </div>
    )
  }
}

export default TextEdit
