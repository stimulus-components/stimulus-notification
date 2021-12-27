import { Controller } from '@hotwired/stimulus'
import { useTransition } from 'stimulus-use'

export default class extends Controller {
  timeout: number
  enter: (event?: Event) => void
  leave: (event?: Event) => void
  transitioned: false
  delayValue: number

  static values = {
    delay: {
      type: Number,
      default: 3000
    }
  }

  initialize () {
    this.hide = this.hide.bind(this)
  }

  connect () {
    useTransition(this)

    this.enter()

    this.timeout = setTimeout(this.hide, this.delayValue)
  }

  async hide () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    await this.leave()

    this.element.remove()
  }
}
