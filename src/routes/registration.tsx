import { RegistrationForm } from '@/components/shared/RegistrationForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/registration')({
  component: Registration,
})

function Registration() {
    return [
      <RegistrationForm />
  ]
}