const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  document.querySelector('#form-btn').classList.add('d-none')
  document.querySelector('#payment-info').classList.remove('d-none')
})

const submitFormData = () => {
  console.log('Payment button clicked...')

  const userFormData = {
    name: null,
    email: null,
    total: total,
  }

  const shippingInfo = {
    address: null,
    city: null,
    state: null,
    zipcode: null,
  }

  if (!user) {
    userFormData.name = form.name.value ? form.name.value : null
    userFormData.email = form.email.value ? form.email.value : null
  }

  if (shipping) {
    shippingInfo.address = form.address.value ? form.address.value : null
    shippingInfo.city = form.city.value ? form.city.value : null
    shippingInfo.state = form.state.value ? form.state.value : null
    shippingInfo.zipcode = form.zipcode.value ? form.zipcode.value : null
  }

  processOrder(userFormData, shippingInfo)
}

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
  alert('Transaction completed!')
  window.location.href = '/'
}
