import React, { useState } from "react"
import { clients as clientData } from "../../../data/employee"
import { User2Icon, Edit2, Trash2 } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

import { useForm, Controller } from "react-hook-form"

const Client = () => {
  const [clients, setClients] = useState(clientData)
  const [search, setSearch] = useState("")
  const [selectedClient, setSelectedClient] = useState(null)

  // Filter clients by search
  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    setClients((prev) => prev.filter((x) => x.id !== id))
  }

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <User2Icon className="text-white bg-primary rounded-md p-2" size={40} />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-slate-600">View and manage all clients</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-sm">
        <Input
          placeholder="Search Client by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Clients Table */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Client List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Company ID</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.length > 0 ? (
                filteredClients.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.companyId}</TableCell>
                    <TableCell>{c.phone}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedClient(c)}
                      >
                        <Edit2 size={16} />
                      </Button>
                      <Button
                        size="sm"
                      
                        onClick={() => handleDelete(c.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No clients found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Client Dialog using React Hook Form */}
      {selectedClient && (
        <ClientEditDialog
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
          onSave={(updatedClient) => {
            setClients((prev) =>
              prev.map((c) => (c.id === updatedClient.id ? updatedClient : c))
            )
            setSelectedClient(null)
          }}
        />
      )}
    </div>
  )
}

export default Client

/* ---------- RHF Edit Dialog ---------- */
const ClientEditDialog = ({ client, onClose, onSave }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: client,
  })

  const onSubmit = (data) => {
    onSave(data)
  }

  return (
    <Dialog open={!!client} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Client</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <FormField label="Client Name" name="name" register={register} />
          <FormField label="Company ID" name="companyId" register={register} />
          <FormField label="Phone" name="phone" register={register} />
          <FormField label="Email" name="email" register={register} />
          <FormField label="Address" name="address" register={register} />
          <FormField label="Website" name="website" register={register} />

          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

/* ---------- Reusable Form Field ---------- */
const FormField = ({ label, name, register }) => (
  <div className="space-y-1">
    <Label>{label}</Label>
    <Input {...register(name)} />
  </div>
)
