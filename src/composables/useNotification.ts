import { toast, type ToastOptions } from 'vue3-toastify'

export function useNotification() {
  const base: ToastOptions = { autoClose: 1000 }

  const success = (message: string, opts: ToastOptions = {}) =>
    toast(message, { ...base, type: 'success', ...opts })

  const error = (message: string, opts: ToastOptions = {}) =>
    toast(message, { ...base, type: 'error', ...opts })

  const info = (message: string, opts: ToastOptions = {}) =>
    toast(message, { ...base, type: 'info', ...opts })

  const warn = (message: string, opts: ToastOptions = {}) =>
    toast(message, { ...base, type: 'warning', ...opts })

  return { success, error, info, warn }
}
