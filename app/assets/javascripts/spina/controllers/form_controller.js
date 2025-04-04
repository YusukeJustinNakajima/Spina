import { Controller } from "@hotwired/stimulus"
import debounce from "libraries/debounce"

export default class extends Controller {
  
  submitForm = debounce(function() {
    this.element.requestSubmit()
  }.bind(this), this.debounceTime)
  
  requestSubmit() {
    this.submitForm()
  }
  
  submit() {
    this.submitForm()
  }
  
  get debounceTime() {
    return this.element.dataset.debounceTime || 0
  }
  
}
