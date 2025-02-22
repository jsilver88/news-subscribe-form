const form = document.querySelector('#newsletter-form')
const submittedEmail = document.querySelector('#submitted-email')
const signup = document.querySelector('#sign-up')
const success = document.querySelector('#success')
const dismiss = document.querySelector('#dismiss')

function updateSuccessMessage(email) {
  // update strong tag with email
  submittedEmail.textContent = email
}

function switchSections() {
  signup.classList.toggle('hidden')
  success.classList.toggle('hidden')
}

function isValidEntry(str) {
  const reg = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  return reg.test(str)
}

function showErrors() {
  const errorMsg = document.querySelector('.error-message')
  const input = document.querySelector('#email')
  errorMsg.classList.remove('hidden')
  input.classList.add('error')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = form.querySelector('#email')
  const valid = isValidEntry(email.value)
  console.log(valid)
  if (!valid) {
    return showErrors()
  }
  if (valid) {
    updateSuccessMessage(email.value)
    switchSections()
  }
})

dismiss.addEventListener('click', () => {
  switchSections()
  updateSuccessMessage('')
})
