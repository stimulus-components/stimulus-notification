export default class extends Controller {
  timeout: number
  enter: (event?: Event) => void
  leave: (event?: Event) => void
  transitioned: false
  delayValue: number
  hiddenValue: boolean
  repeating: boolean

  static values = {
    delay: {
      type: Number,
      default: 3000
    },
    hidden: {
      type: Boolean,
      default: false
    },
    repeat: {
      type: Boolean,
      default: true
    }
  }

  initialize () {
    this.hide = this.hide.bind(this)
  }

  connect () {
    useTransition(this)

    if (this.hiddenValue === false) {
      this.show()
    }
  }

  show () {
    this.enter()

    this.timeout = setTimeout(this.hide, this.delayValue)
  }

  async hide () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    await this.leave()

    if (this.repeatValue) {
      this.show()
    } else {
      this.element.remove()
    }
  }
}
