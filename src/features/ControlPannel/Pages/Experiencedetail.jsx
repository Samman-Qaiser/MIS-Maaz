import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { IoAddCircle } from 'react-icons/io5'

const Experiencedetail = () => {
  const { register } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    name: "experience"
  })

  return (
    <div className='p-4 space-y-4'>
      {fields.map((field, index) => (
        <div key={field.id} className='relative border rounded p-4'>
          {fields.length > 1 && (
            <Button
              variant="destructive"
              size="sm"
              className="absolute text-primary top-2 right-2"
              onClick={() => remove(index)}
            >
              Delete
            </Button>
          )}

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label>Company Name</Label>
              <Input 
                type='text' 
                {...register(`experience.${index}.companyname`, { required: "Company name is required" })}
              />
            </div>

            <div className='space-y-2'>
              <Label>Designation</Label>
              <Input 
                type='text' 
                placeholder='e.g. Software Engineer' 
                {...register(`experience.${index}.designation`, { required: "Role is required" })}
              />
            </div>

            <div className='space-y-2 col-span-2'>
              <Label>Job Description</Label>
              <Textarea 
                placeholder='Describe your responsibilities and achievements' 
                {...register(`experience.${index}.jobdescription`, { required: "Job description is required" })}
              />
            </div>

            <div className='space-y-2'>
              <Label>Start Date</Label>
              <Input 
                type='date' 
                {...register(`experience.${index}.jobstartdate`, { required: "Start date is required" })}
              />
            </div>

            <div className='space-y-2'>
              <Label>End Date</Label>
              <Input 
                type='date' 
                {...register(`experience.${index}.jobenddate`, { required: "End date is required" })}
              />
            </div>
          </div>
        </div>
      ))}

      <Button onClick={() => append({})} className="mt-2 flex items-center gap-2">
        <IoAddCircle /> Add Previous Role
      </Button>
    </div>
  )
}

export default Experiencedetail
