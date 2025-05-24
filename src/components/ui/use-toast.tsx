"use client"

import * as React from "react"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 5000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const toastState = {
  toasts: [] as ToasterToast[],
}

export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToasterToast[]>(toastState.toasts)

  React.useEffect(() => {
    toastState.toasts = toasts
  }, [toasts])

  function toast({ ...props }: Omit<ToasterToast, "id">) {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, ...props }
    
    setToasts((prevToasts) => {
      const updatedToasts = [newToast, ...prevToasts].slice(0, TOAST_LIMIT)
      toastState.toasts = updatedToasts
      return updatedToasts
    })
    
    // Auto-dismiss after delay
    setTimeout(() => {
      dismiss(id)
    }, TOAST_REMOVE_DELAY)

    return id
  }

  function dismiss(toastId?: string) {
    setToasts((prevToasts) => {
      const updatedToasts = toastId
        ? prevToasts.filter((toast) => toast.id !== toastId)
        : []
      toastState.toasts = updatedToasts
      return updatedToasts
    })
  }

  function update(toastId: string, props: Partial<ToasterToast>) {
    setToasts((prevToasts) => {
      const updatedToasts = prevToasts.map((toast) =>
        toast.id === toastId ? { ...toast, ...props } : toast
      )
      toastState.toasts = updatedToasts
      return updatedToasts
    })
  }

  return {
    toast,
    dismiss,
    toasts,
    update,
  }
}

// Create a standalone toast function
export const toast = (props: Omit<ToasterToast, "id">) => {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast = { id, ...props }
  
  toastState.toasts = [newToast, ...toastState.toasts].slice(0, TOAST_LIMIT)
  
  // Force re-render of any components using the useToast hook
  document.dispatchEvent(new CustomEvent('toast-update'))
  
  // Auto-dismiss after delay
  setTimeout(() => {
    toastState.toasts = toastState.toasts.filter(t => t.id !== id)
    document.dispatchEvent(new CustomEvent('toast-update'))
  }, TOAST_REMOVE_DELAY)
  
  return id
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map((toast) => {
        const { id, title, description, action, ...props } = toast

        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

export { type ToastProps, type ToastActionElement } 