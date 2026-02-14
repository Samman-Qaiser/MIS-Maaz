import React from "react"
import { useFormContext, Controller } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const PersonalInfo = () => {
  const { register, control } = useFormContext()

  return (
    <div className="space-y-6 mt-6 p-6">
      {/* Row 1 */}
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label>Full Name</Label>
          <Input 
            {...register("fullName", { required: "Full Name is required" })}
            placeholder="e.g. Ahmed Khan" 
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label>Guardian Name</Label>
          <Input 
            {...register("guardianName", { required: "Guardian Name is required" })}
            placeholder="e.g. Mohammed Khan" 
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label>CNIC</Label>
          <Input 
            {...register("cnic", { required: "CNIC is required" })}
            placeholder="42101-XXXXXXX-X" 
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label>Date of Birth</Label>
          <Input 
            type="date" 
            {...register("dob", { required: "DOB is required" })}
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label>Gender</Label>
          <Controller
            control={control}
            name="gender"
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label>Email</Label>
          <Input 
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="name@company.com" 
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label>Mobile</Label>
          <Input 
            {...register("mobile", { required: "Mobile is required" })}
            placeholder="+92 3XX XXXXXXX" 
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label>Religion</Label>
          <Controller
            control={control}
            name="religion"
            rules={{ required: "Religion is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Religion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Islam">Islam</SelectItem>
                  <SelectItem value="Christianity">Christianity</SelectItem>
                  <SelectItem value="Hinduism">Hinduism</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label>Blood Group</Label>
          <Controller
            control={control}
            name="bloodGroup"
            rules={{ required: "Blood Group is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(bg => (
                    <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label>Address</Label>
          <Input 
            {...register("address", { required: "Address is required" })}
            placeholder="Street, Area" 
          />
        </div>
        <div className="flex-1 space-y-2">
          <Label>City</Label>
          <Input 
            {...register("city", { required: "City is required" })}
            placeholder="Karachi, Lahore, etc." 
          />
        </div>
        <div className="flex-1 space-y-2">
          <Label>Country</Label>
          <Input 
            {...register("country", { required: "Country is required" })}
            placeholder="Pakistan" 
          />
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label>Marital Status</Label>
          <Controller
            control={control}
            name="maritalStatus"
            rules={{ required: "Marital Status is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-[35%]">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {["Single", "Married", "Divorced", "Widowed"].map(status => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo