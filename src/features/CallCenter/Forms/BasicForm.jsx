import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {

  ShieldEllipsis,
  CircleIcon,
} from "lucide-react";
import { BiTransfer } from "react-icons/bi";
import officeLocations from "@/data/officeLocation";
import CallNature from "../component/CallNature";

const CompactField = ({ label, required, children }) => (
  <div className="space-y-1">
    <Label className="text-xs font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    {children}
  </div>
);

const BasicForm = ({ callid, name }) => {
  const { register, handleSubmit, control } = useForm();
  const [isHIPPA, setIsHIPPA] = useState(false);
  const [isTransfer, setIsTransfer] = useState(false);

  const onSubmit = (data) => {
    console.log(data, { isHIPPA, isTransfer });
  };

  return (
    <div className="h-screen bg-background p-3">
      <div className="max-w-6xl mx-auto space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">{name} – Basic Form</h1>
          {callid && (
            <Badge className="text-xs px-3 py-1">Call ID: {callid}</Badge>
          )}
        </div>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardContent className="p-4 grid grid-cols-4 gap-3">
              {/* Account */}
              <CompactField label="Account #" required>
                <Input
                  className="h-9"
                  {...register("accountno", { required: true })}
                />
              </CompactField>

              {/* Office */}
              <CompactField label="Office Location" required>
                <Controller
                  control={control}
                  name="officeLocation"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="h-9 w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {officeLocations.map((o) => (
                          <SelectItem key={o.location} value={o.location}>
                            {o.location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </CompactField>
<CompactField label="Call Nature" required>
  <CallNature control={control} />
</CompactField>


              {/* Eligibility */}
              <CompactField label="Eligibility">
                <Controller
                  control={control}
                  name="eligibility"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="h-9 w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="confirm" className='flex items-center gap-2'>
                        <CircleIcon className="bg-green-600 rounded-full text-green-500"/>
                        Confirm</SelectItem>
                        <SelectItem value="not_confirm" className='flex items-center gap-2'>
                                <CircleIcon className="bg-red-600 rounded-full text-red-500"/>
                        Not Confirm</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </CompactField>

              {/* Copay */}
              <CompactField label="CO-Pay">
                <Input className="h-9" {...register("copay")} />
              </CompactField>

              {/* Demographics */}
              <CompactField label="Demographics">
                <Controller
                  control={control}
                  name="demographics"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="h-9 w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adult">Adult</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </CompactField>

              {/* Feedback */}
              <CompactField label="Call Feedback">
                <textarea
                  rows={2}
                  {...register("feedback")}
                  className="w-full border rounded-md px-2 py-1 text-sm resize-none"
                />
              </CompactField>

              {/* Notes */}
              <CompactField label="Notes">
                <textarea
                  rows={2}
                  {...register("notes")}
                  className="w-full border rounded-md px-2 py-1 text-sm resize-none"
                />
              </CompactField>

              {/* HIPPA */}
              <div className="col-span-2 flex items-center gap-2 mt-4">
                <Checkbox checked={isHIPPA} onCheckedChange={setIsHIPPA} />
                <ShieldEllipsis size={14} />
                <Label className="text-sm">HIPPA</Label>
              </div>

              {isHIPPA && (
                <>
                  <CompactField label="DR Code">
                    <Input className="h-9" {...register("drCode")} />
                  </CompactField>
                  <CompactField label="DOS">
                    <Input type="date" className="h-9" {...register("dos")} />
                  </CompactField>
                </>
              )}

              {/* Transfer */}
              <div className="col-span-2 flex items-center gap-2">
                <Checkbox
                  checked={isTransfer}
                  onCheckedChange={setIsTransfer}
                />
                <BiTransfer size={14} />
                <Label className="text-sm">Transfer Call</Label>
              </div>

              {isTransfer && (
                <CompactField label="Transfer To">
                  <Controller
                    control={control}
                    name="transferOffice"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="h-9 w-full">
                          <SelectValue placeholder="Select office" />
                        </SelectTrigger>
                        <SelectContent>
                          {officeLocations.map((o) => (
                            <SelectItem
                              key={o.location}
                              value={o.location}
                            >
                              {o.location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </CompactField>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end gap-2 mt-3">
            <Button size="sm">Submit</Button>
            <Button size="sm" variant="outline">
              New Todo
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicForm;
