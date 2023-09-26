function getToken(name) {
  let cookieValue = null
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  return cookieValue
}
const csrftoken = getToken('csrftoken')

const updateBtns = document.querySelectorAll('.update-cart')

updateBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    const productId = this.dataset.product
    const action = this.dataset.action

    if (user) {
      updateUserOrder(productId, action)
    } else {
      console.log('User is not logged in...')
    }
  })
})

const updateUserOrder = async (productId, action) => {
  console.log('User is logged in, sending data...')
  const url = '/update-item/'

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    body: JSON.stringify({
      productId: productId,
      action: action,
    }),
  })

  const data = await res.json()
  
  location.reload()
}
