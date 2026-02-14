import React from "react"
import { useFormContext, Controller, useFieldArray } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const DEGREE_OPTIONS = [
    "Matric (10 Years)",
  "Intermediate (12 Years)",
  "Bachelor (16 Years)",
  "Master (18 Years)",
  "PhD",
]

const EducationDetail = () => {
  const { control, register } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education", // this will be an array of objects
  })

  return (
    <div className="space-y-6 p-4">
      {fields.map((field, index) => (
        <div key={field.id} className="p-4 border rounded space-y-4 relative">
          {/* Delete button */}
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

          <div className="grid grid-cols-4 gap-4">
            {/* Degree Level */}
            <div className="space-y-2">
              <Label>Degree Level</Label>
              <Controller
                control={control}
                name={`education.${index}.degree`}
                rules={{ required: "Degree is required" }}
                render={({ field }) => (
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Degree" />
                    </SelectTrigger>
                    <SelectContent>
                      {DEGREE_OPTIONS.map((deg) => (
                        <SelectItem key={deg} value={deg}>
                          {deg}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Institute / University Name */}
            <div className="col-span-2 space-y-2">
              <Label>Institute / University Name</Label>
              <Input
                {...register(`education.${index}.institute`, { required: "Institute is required" })}
                placeholder="e.g. University of Karachi"
              />
            </div>

            {/* Major Subjects */}
            <div  className="space-y-2">
              <Label>Major Subjects</Label>
              <Input
                {...register(`education.${index}.major`, { required: "Major is required" })}
                placeholder="Computer Science, Finance"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 ">
            {/* Total Marks / CGPA */}
            <div className="space-y-2">
              <Label>Total Marks / CGPA</Label>
              <Input
                type="number"
                step="0.01"
                {...register(`education.${index}.totalMarks`, { required: "Total marks required" })}
                placeholder="4.0"
              />
            </div>

            {/* Obtained Marks */}
            <div  className="space-y-2">
              <Label>Obtained Marks</Label>
              <Input
                type="number"
                step="0.01"
                {...register(`education.${index}.obtainedMarks`, { required: "Obtained marks required" })}
                placeholder="3.8"
              />
            </div>

            {/* Start Date */}
            <div  className="space-y-2">
              <Label>Start Date</Label>
              <Input
                type="date"
                {...register(`education.${index}.startDate`, { required: "Start date required" })}
              />
            </div>

            {/* End Date / Passing Year */}
            <div  className="space-y-2">
              <Label>End Date / Passing Year</Label>
              <Input
                type="date"
                {...register(`education.${index}.endDate`, { required: "End date required" })}
              />
            </div>
          </div>
        </div>
      ))}

      <Button type="button" onClick={() => append({})}>
        + Add Another Qualification
      </Button>
    </div>
  )
}

export default EducationDetail
