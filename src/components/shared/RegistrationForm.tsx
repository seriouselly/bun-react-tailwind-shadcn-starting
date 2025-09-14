"use client";

import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";

// Schema validasi dengan Zod
const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Nama lengkap minimal 2 karakter")
    .max(50, "Nama lengkap maksimal 50 karakter"),
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password harus mengandung huruf besar, kecil, dan angka"),
  age: z
    .number()
    .min(13, "Usia minimal 13 tahun")
    .max(100, "Usia maksimal 100 tahun"),
  birthdate: z
    .string()
    .min(1, "Tanggal lahir wajib diisi"),
  gender: z
    .string()
    .min(1, "Gender wajib dipilih"),
  learningPath: z
    .array(z.string())
    .min(1, "Pilih minimal 1 learning path"),
  notes: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export const RegistrationForm: React.FC = () => {
  const [addNotes, setAddNotes] = useState(false);
  const [participants, setParticipants] = useState<RegistrationFormData[]>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      age: 0,
      birthdate: "",
      gender: "",
      learningPath: [] as string[],
      notes: "",
    },
        onSubmit: async ({ value }) => {
      setLoading(true);
      try {
        // Validasi dengan Zod sebelum submit
        const validatedData = registrationSchema.parse(value);
        
        setParticipants((prev) => [...prev, validatedData]);
        toast.success("Registrasi berhasil!");
        console.log("Submitted:", validatedData);
        
        // Reset form setelah submit
        form.reset();
        setAddNotes(false);
      } catch (error) {
        if (error instanceof z.ZodError) {
          error.issues.forEach((err) => {
            toast.error(`${err.path.join('.')}: ${err.message}`);
          });
        } else {
          toast.error("Terjadi kesalahan saat registrasi");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-full min-h-100 m-4">
      <div className="w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">
          Registration Form
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Full Name Field */}
          <form.Field 
            name="fullName"
            validators={{
              onChange: registrationSchema.shape.fullName,
            }}
          >
            {(field) => (
              <div>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                    field.state.meta.errors.length > 0
                      ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof field.state.meta.errors[0] === "string"
                      ? field.state.meta.errors[0]
                      : field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Email Field */}
          <form.Field 
            name="email"
            validators={{
              onChange: registrationSchema.shape.email,
            }}
          >
            {(field) => (
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                    field.state.meta.errors.length > 0
                      ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof field.state.meta.errors[0] === "string"
                      ? field.state.meta.errors[0]
                      : field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Password Field */}
          <form.Field 
            name="password"
            validators={{
              onChange: registrationSchema.shape.password,
            }}
          >
            {(field) => (
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                    field.state.meta.errors.length > 0
                      ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof field.state.meta.errors[0] === "string"
                      ? field.state.meta.errors[0]
                      : field.state.meta.errors[0]?.message}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Minimal 6 karakter, harus ada huruf besar, kecil, dan angka
                </p>
              </div>
            )}
          </form.Field>

          {/* Age Field */}
          <form.Field 
            name="age"
            validators={{
              onChange: registrationSchema.shape.age,
            }}
          >
            {(field) => (
              <div>
                <Label>Age</Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={field.state.value || ""}
                  onChange={(e) => field.handleChange(Number(e.target.value) || 0)}
                  onBlur={field.handleBlur}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                    field.state.meta.errors.length > 0 
                      ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500" 
                      : "border-gray-300"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof field.state.meta.errors[0] === "string"
                      ? field.state.meta.errors[0]
                      : field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Birthdate Field */}
          <form.Field 
            name="birthdate"
            validators={{
              onChange: registrationSchema.shape.birthdate,
            }}
          >
            {(field) => (
              <div>
                <Label>Birthdate</Label>
                <Input
                  type="date"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                    field.state.meta.errors.length > 0 
                      ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500" 
                      : "border-gray-300"
                  }`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof field.state.meta.errors[0] === "string"
                      ? field.state.meta.errors[0]
                      : field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Gender Field */}
          <form.Field 
            name="gender"
            validators={{
              onChange: registrationSchema.shape.gender,
            }}
          >
            {(field) => (
              <div>
                <Label>Gender</Label>
                <Select 
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                    field.state.meta.errors.length > 0 
                      ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500" 
                      : "border-gray-300"
                  }`}>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof field.state.meta.errors[0] === "string"
                      ? field.state.meta.errors[0]
                      : field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Learning Path Field */}
          <form.Field 
            name="learningPath"
            validators={{
              onChange: registrationSchema.shape.learningPath,
            }}
          >
            {(field) => (
              <div>
                <Label>Learning Path</Label>
                <div className="flex flex-wrap gap-2.5">
                  {["Frontend", "Backend", "DevOps", "UI/UX"].map((path) => (
                    <div key={path} className="flex gap-1 items-center">
                      <Checkbox
                        checked={field.state.value.includes(path)}
                        className="dark:bg-gray-700 dark:border-gray-600"
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.handleChange([...field.state.value, path]);
                          } else {
                            field.handleChange(
                              field.state.value.filter((v) => v !== path)
                            );
                          }
                        }}
                      />
                      <span className="text-sm">{path}</span>
                    </div>
                  ))}
                </div>
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof field.state.meta.errors[0] === "string"
                      ? field.state.meta.errors[0]
                      : field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Add Notes Toggle */}
          <div className="flex gap-2 mt-2 items-center">
            <Checkbox
              checked={addNotes}
              onCheckedChange={(checked) => setAddNotes(!!checked)}
              className="dark:bg-gray-700 dark:border-gray-600"
            />
            <Label>Add Notes?</Label>
          </div>

          {/* Notes Field (conditional) */}
          {addNotes && (
            <form.Field name="notes">
              {(field) => (
                <div>
                  <Label>Notes</Label>
                  <Textarea
                    placeholder="Additional notes..."
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 border-gray-300"
                  />
                </div>
              )}
            </form.Field>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || form.state.isSubmitting}
            className={`w-40 mx-auto block mt-5 p-2 rounded-[15px] transition cursor-pointer dark:bg-gray-100 dark:text-black dark:font-semibold ${
              loading || form.state.isSubmitting
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-white"
            }`}
          >
            {loading || form.state.isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>

        {/* Custom Styles */}
        <style >{`
          input::-webkit-calendar-picker-indicator {
          margin: 190px;
            cursor: pointer;
          }
        `}</style>

        {/* Display Submitted Data */}
        {/* {participants.length > 0 && (
          <div className="p-4 mt-4 rounded-xl shadow bg-white/90 text-black dark:bg-gray-800 dark:text-gray-100">
            <h3 className="font-bold mb-2">Registered Participants ({participants.length}):</h3>
            <div className="max-h-60 overflow-y-auto">
              <pre className="text-xs whitespace-pre-wrap text-gray-900 dark:text-gray-100">
                {JSON.stringify(participants, null, 2)}
              </pre>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};