import { Building, PenBoxIcon, Trash2, X } from "lucide-react";
import { departments as depData } from "../../../data/department";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const allWorkAreas = [
  "HR",
  "Finance",
  "Support",
  "Sales",
  "Billing",
  "Insurance",
  "IT Support",
  "Infrastructure",
  "Training",
  "Onboarding",
];

const Department = () => {
  const [departments, setDepartments] = useState(depData);

  // EDIT
  const [editId, setEditId] = useState(null);

  // ADD / EDIT FORM
  const [formData, setFormData] = useState({
    name: "",
    workAreas: [],
  });

  const [openAdd, setOpenAdd] = useState(false);

  /* ---------- EDIT ---------- */
  const handleEdit = (dep) => {
    setEditId(dep.id);
    setFormData({
      name: dep.name,
      workAreas: dep.workAreas || [],
    });
  };

  const handleSave = () => {
    setDepartments((prev) =>
      prev.map((dep) =>
        dep.id === editId ? { ...dep, ...formData } : dep
      )
    );
    resetForm();
  };

  /* ---------- ADD ---------- */
  const addDepartment = () => {
    if (!formData.name.trim()) return;

    const newDepartment = {
      id: Date.now().toString(),
      name: formData.name,
      workAreas: formData.workAreas,
    };

    setDepartments((prev) => [...prev, newDepartment]);
    setOpenAdd(false);
    resetForm();
  };

  /* ---------- DELETE ---------- */
  const handleDelete = (id) => {
    setDepartments((prev) => prev.filter((dep) => dep.id !== id));
  };

  /* ---------- WORK AREA HANDLERS ---------- */
  const addWorkArea = (area) => {
    if (!formData.workAreas.includes(area)) {
      setFormData({
        ...formData,
        workAreas: [...formData.workAreas, area],
      });
    }
  };

  const removeWorkArea = (area) => {
    setFormData({
      ...formData,
      workAreas: formData.workAreas.filter((a) => a !== area),
    });
  };

  const resetForm = () => {
    setEditId(null);
    setFormData({ name: "", workAreas: [] });
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Building className="text-white bg-primary rounded-md p-2" size={40} />
          <div>
            <h1 className="text-2xl font-bold">Departments</h1>
            <p className="text-slate-500">View and manage all departments</p>
          </div>
        </div>

        <Button onClick={() => setOpenAdd(true)} className='mr-3'>
          <IoAddCircleOutline /> Add Department
        </Button>
      </div>

      {/* TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sr</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Work Areas</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {departments.map((dep, index) => (
            <TableRow key={dep.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{dep.name}</TableCell>
              <TableCell>
                {dep.workAreas?.map((area) => (
                  <span
                    key={area}
                    className="bg-accent px-2 py-0.5 rounded text-xs mr-1"
                  >
                    {area}
                  </span>
                ))}
              </TableCell>
              <TableCell className="flex gap-1">
                <Button variant="outline" onClick={() => handleEdit(dep)}>
                  <PenBoxIcon />
                </Button>
                <Button onClick={() => handleDelete(dep.id)}>
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* ADD / EDIT DIALOG */}
      {(openAdd || editId) && (
        <Dialog open onOpenChange={() => { setOpenAdd(false); resetForm(); }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editId ? "Edit Department" : "Add Department"}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label className='mb-3.5'>Department Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <Label className='mb-3.5'>Work Areas</Label>

                <div className="flex flex-wrap gap-2 border p-2 rounded mb-2">
                  {formData.workAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-primary/10 px-2 py-1 rounded flex items-center gap-1"
                    >
                      {area}
                      <X
                        size={14}
                        className="cursor-pointer"
                        onClick={() => removeWorkArea(area)}
                      />
                    </span>
                  ))}
                </div>

                <Select onValueChange={addWorkArea}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select Work Area" />
                  </SelectTrigger>
                  <SelectContent>
                    {allWorkAreas
                      .filter((a) => !formData.workAreas.includes(a))
                      .map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => resetForm()}>
                Cancel
              </Button>
              <Button onClick={editId ? handleSave : addDepartment}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Department;
