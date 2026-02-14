import { PenBoxIcon, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { IoAddCircle } from 'react-icons/io5';
import { RiSoundModuleFill } from 'react-icons/ri';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { modules as initialModules } from '../../../data/module';

const Module = () => {
  const [modules, setModules] = useState(initialModules);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingModule, setEditingModule] = useState(null);

  // Add Form
  const {
    register: registerAdd,
    handleSubmit: handleSubmitAdd,
    formState: { errors: errorsAdd },
    reset: resetAdd
  } = useForm();

  // Edit Form
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    formState: { errors: errorsEdit },
    reset: resetEdit,
    setValue
  } = useForm();

  // Delete Module
  const handleDelete = (id) => {
    setModules(prev => prev.filter(mod => mod.id !== id));
  };

  // Open Edit Dialog
  const handleEdit = (moduleData) => {
    setEditingModule(moduleData);
    setValue('name', moduleData.name); // Prefill input
    setIsEditDialogOpen(true);
  };

  // Add Module
  const onAddSubmit = (data) => {
    const newModule = {
      id: modules.length > 0 ? Math.max(...modules.map(m => m.id)) + 1 : 1,
      name: data.name
    };
    setModules(prev => [...prev, newModule]);
    resetAdd();
    setIsAddDialogOpen(false);
  };

  // Edit Module
  const onEditSubmit = (data) => {
    setModules(prev =>
      prev.map(m =>
        m.id === editingModule.id ? { ...m, name: data.name } : m
      )
    );
    resetEdit();
    setIsEditDialogOpen(false);
    setEditingModule(null);
  };

  return (
    <div className="p-4">
      {/* Header + Add Module Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <RiSoundModuleFill className="text-white bg-primary rounded-md p-2" size={40} />
          <div>
            <h1 className="text-2xl font-bold">Modules</h1>
            <p className="text-slate-500">View and manage all Modules</p>
          </div>
        </div>

        {/* Add Module Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mr-4" >
              <IoAddCircle />
              Add Module
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Module</DialogTitle>
              <DialogDescription>Enter details for the new module</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitAdd(onAddSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="add-name">Module Name</Label>
                <Input
                  id="add-name"
                  placeholder="Enter Module Name"
                  {...registerAdd('name', {
                    required: 'Module Name is required',
                    minLength: { value: 2, message: 'Module Name must be at least 2 characters' }
                  })}
                />
                {errorsAdd.name && (
                  <p className="text-red-500 text-sm">{errorsAdd.name.message}</p>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Add</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Edit Module Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Module</DialogTitle>
            <DialogDescription>Update the module details</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitEdit(onEditSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Module Name</Label>
              <Input
                id="edit-name"
                placeholder="Enter Module Name"
                {...registerEdit('name', {
                  required: 'Module Name is required',
                  minLength: { value: 2, message: 'Module Name must be at least 2 characters' }
                })}
              />
              {errorsEdit.name && (
                <p className="text-red-500 text-sm">{errorsEdit.name.message}</p>
              )}
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button type="submit">Update</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modules Table */}
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead>Sr</TableHead>
            <TableHead>Module Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {modules.map((mod, index) => (
            <TableRow key={mod.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{mod.name}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant="outline" onClick={() => handleEdit(mod)}><PenBoxIcon /></Button>
                <Button onClick={() => handleDelete(mod.id)}><Trash2 /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Module;
