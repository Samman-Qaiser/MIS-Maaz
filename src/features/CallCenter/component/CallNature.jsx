import React from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CallNature = ({
  control,
  name = "callNature",
  label = "Call Nature",
  required = false,
  placeholder = "Select",
  className = "",
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {/* <Label className="text-xs font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label> */}

      <Controller
        control={control}
        name={name}
        rules={required ? { required: `${label} is required` } : {}}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value || ""}>
            <SelectTrigger className="h-9 w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="inbound">Inbound</SelectItem>
              <SelectItem value="outbound">Outbound</SelectItem>
              <SelectItem value="followup">Follow-up</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default CallNature;
