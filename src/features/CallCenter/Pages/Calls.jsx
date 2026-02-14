import React from "react"
import { IoCallSharp } from "react-icons/io5"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import BasicForm from "../Forms/BasicForm"

const Calls = () => {
  const CallType = [
    { id: 1, name: "Inbound Calls", value: "inboundcalls" },
    { id: 2, name: "Outbound Calls", value: "outboundcalls" },
    { id: 3, name: "Answering Service", value: "answeringservice" },
    { id: 4, name: "Referal Calls", value: "referalcall" },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <IoCallSharp
          className="text-white bg-primary rounded-md p-2"
          size={40}
        />
        <div>
          <h1 className="text-2xl font-bold">Calls</h1>
          <p className="text-slate-500">View and manage all Calls</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="inboundcalls" className="w-full">
        {/* Tabs List */}
        <TabsList className="border-b border-border w-full" variant="line">
          {CallType.map((call) => (
            <TabsTrigger
              key={call.id}
              value={call.value}

            >
              {call.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content */}
        {CallType.map((call) => (
          <TabsContent key={call.id} value={call.value}>
            {/* Pass call.id to BasicForm */}
            <BasicForm callid={call.id} name={call.name} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default Calls
