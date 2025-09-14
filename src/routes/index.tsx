import App from '@/components/shared/LoginForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
      <App />
  )
}