import React from "react"
import { useForm, Controller } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { persons ,clients ,companies ,managers } from "../../../data/employee"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SunIcon, SunsetIcon, MoonIcon, Circle } from "lucide-react"



const EmployeeCreation = () => {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="p-6">
      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Create Employee
          </CardTitle>
          <CardDescription>
            Fill in employee details and assign company, client & shift
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Employee */}
              <div className="space-y-2">
                <Label>Select Employee</Label>
                <Controller
                  name="employee"
                  control={control}
                  rules={{ required: "Employee is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select Employee" />
                      </SelectTrigger>
                      <SelectContent>
                        {persons.map((emp) => (
                          <SelectItem key={emp.id} value={emp.id}>
                            {emp.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label>Select Company</Label>
                <Controller
                  name="company"
                  control={control}
                  rules={{ required: "Company is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select Company" />
                      </SelectTrigger>
                      <SelectContent>
                        {companies.map((comp) => (
                          <SelectItem key={comp.id} value={comp.id}>
                            {comp.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Client */}
              <div className="space-y-2">
                <Label>Select Client</Label>
                <Controller
                  name="client"
                  control={control}
                  rules={{ required: "Client is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select Client" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map((client) => (
                          <SelectItem key={client.id} value={client.id}>
                            {client.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Job Title */}
              <div className="space-y-2">
                <Label>Job Title</Label>
                <Input
                  placeholder="e.g. Frontend Developer"
                  {...register("jobTitle", { required: true })}
                />
              </div>

              {/* Shift */}
              <div className="space-y-2">
                <Label>Shift Type</Label>
                <Controller
                  name="shift"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select Shift" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          <div className="flex items-center gap-2">
                            <SunIcon size={16} /> Morning
                          </div>
                        </SelectItem>
                        <SelectItem value="evening">
                          <div className="flex items-center gap-2">
                            <SunsetIcon size={16} /> Evening
                          </div>
                        </SelectItem>
                        <SelectItem value="night">
                          <div className="flex items-center gap-2">
                            <MoonIcon size={16} /> Night
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Manager */}
              <div className="space-y-2">
                <Label>Assign Manager</Label>
                <Controller
                  name="manager"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select Manager" />
                      </SelectTrigger>
                      <SelectContent>
                        {managers.map((mgr) => (
                          <SelectItem key={mgr.id} value={mgr.id}>
                            {mgr.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Joining Date */}
              <div className="space-y-2">
                <Label>Date of Joining</Label>
                <Input type="date" {...register("joiningDate", { required: true })} />
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label>Status</Label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">
                          <div className="flex items-center gap-2">
                            <Circle className="text-green-600 rounded-full bg-green-600" size={12} /> Active
                          </div>
                        </SelectItem>
                        <SelectItem value="Inactive">
                          <div className="flex items-center gap-2">
                            <Circle className="text-red-600 bg-red-600 rounded-full" size={12} /> Inactive
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Biometric */}
              <div className="space-y-2">
                <Label>Biometric Code</Label>
                <Input
                  placeholder="Enter Biometric Code"
                  {...register("biometricCode", { required: true })}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="submit" className="px-8">
                Create Employee
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default EmployeeCreation
