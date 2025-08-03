'use client'

import { useForm } from '@tanstack/react-form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useState } from 'react'

export function RegistrationForm() {
  const [addNotes, setAddNotes] = useState(false)
  const [participants, setParticipants] = useState<any[]>([])

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      age: 0,
      birthdate: '',
      gender: '',
      learningPath: [] as string[],
      notes: ''
    },
    onSubmit: async ({ value }) => {
      setParticipants((prev) => [...prev, value])
      toast.success('Form submitted successfully!')
      console.log('Submitted:', value)
    },
  })

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field name="fullName">
          {(field) => (
            <div>
              <Label>Full Name</Label>
              <Input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onFocus={() => console.log('Full Name focused')}
                onBlur={() => console.log('Full Name blurred')}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="age">
          {(field) => (
            <div>
              <Label>Age</Label>
              <Input
                type="number"
                value={field.state.value}
                onChange={(e) => field.handleChange(Number(e.target.value))}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="birthdate">
          {(field) => (
            <div>
              <Label>Birthdate</Label>
              <Input
                type="date"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="gender">
          {(field) => (
            <div>
              <Label>Gender</Label>
              <Select onValueChange={field.handleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </form.Field>

        <form.Field name="learningPath">
          {(field) => (
            <div>
              <Label>Learning Path</Label>
              {["Frontend", "Backend", "DevOps", "UI/UX"].map((path) => (
                <div key={path} className="flex gap-2 items-center">
                  <Checkbox
                    checked={field.state.value.includes(path)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.handleChange([...field.state.value, path])
                      } else {
                        field.handleChange(field.state.value.filter((v) => v !== path))
                      }
                    }}
                  />
                  <span>{path}</span>
                </div>
              ))}
            </div>
          )}
        </form.Field>

        <div className="flex gap-2 items-center">
          <Checkbox
            checked={addNotes}
            onCheckedChange={(checked) => setAddNotes(!!checked)}
          />
          <Label>Add Notes?</Label>
        </div>

        {addNotes && (
          <form.Field name="notes">
            {(field) => (
              <div>
                <Label>Notes</Label>
                <Textarea
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
        )}

        <Button type="submit" className="mt-4">Submit</Button>
      </form>

      {/* Tampilkan data peserta */}
      {participants.length > 0 && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Submitted Data:</h2>
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(participants, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
