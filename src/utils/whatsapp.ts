type WhatsAppParams = {
  phone: string // ex: "11965763714"
  message?: string
}

export function getWhatsappLink({ phone, message }: WhatsAppParams) {
  const baseUrl = 'https://wa.me/'
  const text = message ? `?text=${encodeURIComponent(message)}` : ''

  return `${baseUrl}${phone}${text}`
}
