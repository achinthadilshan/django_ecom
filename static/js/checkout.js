const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  document.querySelector('#form-btn').classList.add('d-none')
  document.querySelector('#payment-info').classList.remove('d-none')
})

document.querySelector('#make-payment').addEventListener('click', (e) => {
  submitFormData()
})

const processOrder = async (userData, shippingData) => {
  const url = '/process-order/'

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    body: JSON.stringify({
      userData: userData,
      shippingData: shippingData,
    }),
  })

  const data = await res.json()

  console.log(data)

  window.location.href = '/'
}
