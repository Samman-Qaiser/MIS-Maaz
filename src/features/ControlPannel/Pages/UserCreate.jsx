import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { IoEyeOff, IoEyeSharp } from "react-icons/io5"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { persons } from '../../../data/employee'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import { ChevronsUpDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { modules } from '../../../data/module'
import { 
  Shield, 
  User, 
  Lock, 
  Building2, 
  Folder,
  Phone,
  Settings,
  DollarSign,
  Users,
  Package,
  Briefcase,
  TrendingUp,
  Zap,
  Laptop,
  ShoppingCart,
  CheckCircle
} from "lucide-react"

export const UserCreate = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm()

  const [showPassword, setShowPassword] = useState(false)
  const [selectedModules, setSelectedModules] = useState([])






  const toggleModule = (moduleId) => {
    setSelectedModules(prev => {
      if (prev.includes(moduleId)) {
        return prev.filter(id => id !== moduleId)
      } else {
        return [...prev, moduleId]
      }
    })
  }

  const onSubmit = (data) => {
    const formData = {
      ...data,
      selectedModules,
    }
    console.log("Form Data:", formData)
    // Add your API call here
  }

  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <div className="space-y-2 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Create User Account</h1>
        <p className="text-slate-600">
          Set up a new user with access permissions 
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        
        {/* Basic Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Basic Information
            </CardTitle>
            <CardDescription>Select person and configure user credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              
              {/* Select Person */}
              <div className='space-y-2'>
                <Label>Select Person <span className="text-red-500">*</span></Label>
               <Controller
  name="employee"
  control={control}
  rules={{ required: "Employee is required" }}
  render={({ field }) => {
    const selectedEmployee = persons.find(p => p.id === field.value)

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
          >
            {selectedEmployee
              ? `${selectedEmployee.name} — ${selectedEmployee.cnic}`
              : "Select User"}
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search employee..." />
            <CommandEmpty>No employee found.</CommandEmpty>

            <CommandGroup>
              {persons.map((person) => (
                <CommandItem
                  key={person.id}
                  value={person.name}
                  onSelect={() => field.onChange(person.id)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      field.value === person.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                 <div className="flex flex-col">
                              <span>{person.name}</span>
                              <span className="text-xs text-slate-500">{person.cnic}</span>
                            </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }}
/>

                {errors.selectedPerson && (
                  <p className="text-sm text-red-500">{errors.selectedPerson.message}</p>
                )}
              </div>

              {/* Username */}
              <div className='space-y-2'>
                <Label>Username <span className="text-red-500">*</span></Label>
                <Input 
                  type='text' 
                  placeholder='e.g. ahmed.khan'
                  {...register("username", { 
                    required: "Username is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+$/,
                      message: "Only letters, numbers, dots, and dashes allowed"
                    }
                  })}
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username.message}</p>
                )}
              </div>

              {/* Password */}
              <div className='space-y-2'>
                <Label>Password <span className="text-red-500">*</span></Label>
                <div className='border rounded-md flex items-center px-3 focus-within:ring-2 focus-within:ring-primary'>
                  <Input 
                    type={showPassword ? "text" : 'password'} 
                    placeholder='Min. 8 characters'
                    className="border-none focus-visible:ring-0 shadow-none" 
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <IoEyeSharp size={18} /> : <IoEyeOff size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Role */}
              <div className='space-y-2'>
                <Label>Assign Role <span className="text-red-500">*</span></Label>
                <Controller
                  control={control}
                  name="role"
                  rules={{ required: "Please select a role" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select User Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='admin'>Admin</SelectItem>
                        <SelectItem value='manager'>Manager</SelectItem>
                        <SelectItem value='teamlead'>Team Lead</SelectItem>
                        <SelectItem value='user'>User</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.role && (
                  <p className="text-sm text-red-500">{errors.role.message}</p>
                )}
              </div>

              {/* Status */}
              <div className='space-y-2'>
                <Label>Account Status <span className="text-red-500">*</span></Label>
                <Controller
                  control={control}
                  name="status"
                  rules={{ required: "Please select status" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Set Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='active'>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            Active
                          </div>
                        </SelectItem>
                        <SelectItem value='inactive'>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500" />
                            Inactive
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.status && (
                  <p className="text-sm text-red-500">{errors.status.message}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module Assignment Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Folder className="h-5 w-5" />
              Module Assignment
            </CardTitle>
            <CardDescription>
              Select which modules this user can access ({selectedModules.length} selected)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modules.map(({id,name,icon:IconComponent}) => {
             
                const isSelected = selectedModules.includes(id)
                
                return (
                  <div
                    key={id}
                    className={`
                      p-4 border-2 rounded-lg cursor-pointer transition-all
                      ${isSelected
                        ? 'border-primary bg-primary/5' 
                        : 'border-slate-200 hover:border-slate-300'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        className='border-accent border-2'
                        checked={isSelected}
                        onCheckedChange={() => toggleModule(id)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <IconComponent className="h-4 w-4 text-primary" />
                          <span className="font-medium text-sm">{name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {selectedModules.length === 0 && (
              <p className="text-sm text-amber-600 mt-4 p-3 bg-amber-50 rounded-md">
                ⚠️ Please select at least one module for the user
              </p>
            )}
          </CardContent>
        </Card>

    

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">
            Create User Account
          </Button>
        </div>
      </form>
    </div>
  )
}