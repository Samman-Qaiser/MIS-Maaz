import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const TimelineItem = ({ company, designation, startDate, endDate, isActive }) => (
 

     <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-primary via-primary/50 to-transparent" />
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20" />

      <div className="bg-card rounded-xl border p-5 hover:border-primary/50 hover:shadow-lg transition">
        <div className="flex justify-between mb-3">
          <div>
            <h4 className="text-lg font-bold">{designation}</h4>
            <p className="text-sm text-primary">{company}</p>
          </div>

          <Badge variant={isActive ? "default" : "outline"}>
            <Clock className="w-3 h-3 mr-1" />
            {isActive ? "Active" : "Completed"}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5" />
          {startDate} → {endDate || "Present"}
        </div>
      </div>
    </div> 

)

export default TimelineItem
