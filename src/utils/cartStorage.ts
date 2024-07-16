// utils/cartStorage.ts
const CART_STORAGE_KEY = 'shopping-cart'
export const EXPIRATION_TIME = 24 * 60 * 60 * 1000 // 24 horas em milissegundos

export const saveCartToStorage = (cartId: string, sessionId: string) => {
  const expiration = Date.now() + EXPIRATION_TIME
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ cartId, sessionId, expiration }))
}

export const getCartFromStorage = () => {
  const storedData = localStorage.getItem(CART_STORAGE_KEY)
  if (!storedData) return null

  const { cartId, sessionId, expiration } = JSON.parse(storedData)
  if (Date.now() > expiration) {
    localStorage.removeItem(CART_STORAGE_KEY)
    return null
  }

  return { cartId, sessionId }
}

export const clearCartStorage = () => {
  localStorage.removeItem(CART_STORAGE_KEY)
}
