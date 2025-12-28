import React from 'react'
import { createFileRoute, Outlet ,redirect } from '@tanstack/react-router'


export const Route = createFileRoute('/_authenticated')({
// beforeLoad di-run sebelum children di-load; cocok untuk guard
beforeLoad: async ({ location }) => {
const token = localStorage.getItem('token')
if (!token) {
// lempar redirect agar TanStack Router mengarahkan ke /login
throw redirect({ to: '/login', search: { redirect: location.href } })
}
return true
},
component: AuthLayout,
})


function AuthLayout() {
return (
<div>
{/* Bisa pasang nav khusus user */}
<Outlet />
</div>
)
}