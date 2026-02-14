import React, { useState } from "react"
import { companies as companyData } from "../../../data/employee"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Building2,
  Phone,
  Globe,
  Mail,
  MapPin,
} from "lucide-react"

const Company = () => {
  const [companies, setCompanies] = useState(companyData)
  const [selectedCompany, setSelectedCompany] = useState(null)

  const companyInfoFields = [
    { key: "address", label: "Address", icon: MapPin },
    { key: "phone", label: "Phone", icon: Phone },
    { key: "email", label: "Email", icon: Mail },
    { key: "website", label: "Website", icon: Globe },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setSelectedCompany((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === selectedCompany.id ? selectedCompany : c
      )
    )
    setSelectedCompany(null)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Building2 className="h-7 w-7" />
        Companies
      </h1>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Card key={company.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {company.name}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedCompany(company)}
                >
                  Edit
                </Button>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {companyInfoFields.map((field) => (
                <InfoRow
                  key={field.key}
                  icon={field.icon}
                  label={field.label}
                  value={company[field.key]}
                />
              ))}

              <Separator />

              <p className="text-xs text-muted-foreground">
                Created on {company.createdAt}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      {selectedCompany && (
        <Dialog
          open={!!selectedCompany}
          onOpenChange={() => setSelectedCompany(null)}
        >
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit Company</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <FormField label="Company Name" name="name" value={selectedCompany.name} onChange={handleChange} />
              <FormField label="Address" name="address" value={selectedCompany.address} onChange={handleChange} />
              <FormField label="Phone" name="phone" value={selectedCompany.phone} onChange={handleChange} />
              <FormField label="Email" name="email" value={selectedCompany.email} onChange={handleChange} />
              <FormField label="Website" name="website" value={selectedCompany.website} onChange={handleChange} />
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedCompany(null)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default Company

/* ---------- Reusable Components ---------- */

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon className="h-5 w-5 text-primary mt-1" />
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  </div>
)

const FormField = ({ label, name, value, onChange }) => (
  <div className="space-y-1">
    <Label>{label}</Label>
    <Input name={name} value={value} onChange={onChange} />
  </div>
)
