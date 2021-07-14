import { Controller } from 'stimulus'
import { useTransition } from 'stimulus-use/dist/use-transition'

export default class extends Controller {
  timeout: number
  enter: (event?: Event) => void
  leave: (event?: Event) => void
  transitioned: false
  delayValue: false

  static values = {
    delay: Number
  }

  initialize () {
    this.hide = this.hide.bind(this)
  }

  connect () {
    useTransition(this)

    this.enter()

    this.timeout = setTimeout(this.hide, this.delayValue || 3000)
  }

  async hide () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    await this.leave()

    this.element.remove()
  }
}
