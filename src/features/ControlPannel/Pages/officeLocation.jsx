import { PenBoxIcon, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoAddCircle } from 'react-icons/io5';
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import officeLocations from '../../../data/officeLocation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const OfficeLocation = () => {
    const [office, setOffice] = useState(officeLocations)
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [editingOffice, setEditingOffice] = useState(null)
    
    const { register: registerAdd, handleSubmit: handleSubmitAdd, formState: { errors: errorsAdd }, reset: resetAdd } = useForm()
    const { register: registerEdit, handleSubmit: handleSubmitEdit, formState: { errors: errorsEdit }, reset: resetEdit, setValue } = useForm()

    const handleDelete = (id) => {
      setOffice((prev) => prev.filter((office) => office.id !== id))
    }

    const handleEdit = (officeData) => {
        setEditingOffice(officeData)
        setValue('location', officeData.location)
        setValue('code', officeData.code)
        setIsEditDialogOpen(true)
    }

    const onAddSubmit = (data) => {
        const newOffice = {
            id: office.length > 0 ? Math.max(...office.map(o => o.id)) + 1 : 1,
            location: data.location,
            code: data.code
        }
        setOffice((prev) => [...prev, newOffice])
        resetAdd()
        setIsAddDialogOpen(false)
    }

    const onEditSubmit = (data) => {
        setOffice((prev) => 
            prev.map((off) => 
                off.id === editingOffice.id 
                    ? { ...off, location: data.location, code: data.code }
                    : off
            )
        )
        resetEdit()
        setIsEditDialogOpen(false)
        setEditingOffice(null)
    }

    return (
        <div className='p-4'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FaLocationCrosshairs className="text-white bg-primary rounded-md p-2" size={40} />
                    <div>
                        <h1 className="text-2xl font-bold">Office Location</h1>
                        <p className="text-slate-500">View and manage all Office Location</p>
                    </div>
                </div>
                
                {/* Add Office Dialog */}
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} >
                    <DialogTrigger asChild >
                        <Button className='mr-3'>
                            <IoAddCircle className="mr-2" />
                            Add Office Location
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Office Location</DialogTitle>
                            <DialogDescription>
                                Enter the details for the new office location
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmitAdd(onAddSubmit)} className="space-y-4">
                            <div className='space-y-3'>
                                <Label htmlFor="add-location">Office Location</Label>
                                <Input
                                    id="add-location"
                                    placeholder="Enter office location"
                                    {...registerAdd('location', { 
                                        required: 'Location is required',
                                        minLength: { value: 2, message: 'Location must be at least 2 characters' }
                                    })}
                                />
                                {errorsAdd.location && (
                                    <p className="text-red-500 text-sm mt-1">{errorsAdd.location.message}</p>
                                )}
                            </div>
                            <div className='space-y-3'>
                                <Label htmlFor="add-code">Code</Label>
                                <Input
                                    id="add-code"
                                    placeholder="Enter office code"
                                    {...registerAdd('code', { 
                                        required: 'Code is required',
                                        minLength: { value: 2, message: 'Code must be at least 2 characters' }
                                    })}
                                />
                                {errorsAdd.code && (
                                    <p className="text-red-500 text-sm mt-1">{errorsAdd.code.message}</p>
                                )}
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">Add Office</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Edit Office Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Office Location</DialogTitle>
                        <DialogDescription>
                            Update the office location details
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitEdit(onEditSubmit)} className="space-y-4">
                        <div className='space-y-3'>
                            <Label htmlFor="edit-location">Office Location</Label>
                            <Input
                                id="edit-location"
                                placeholder="Enter office location"
                                {...registerEdit('location', { 
                                    required: 'Location is required',
                                    minLength: { value: 2, message: 'Location must be at least 2 characters' }
                                })}
                            />
                            {errorsEdit.location && (
                                <p className="text-red-500 text-sm mt-1">{errorsEdit.location.message}</p>
                            )}
                        </div>
                        <div className='space-y-3'>
                            <Label htmlFor="edit-code">Code</Label>
                            <Input
                                id="edit-code"
                                placeholder="Enter office code"
                                {...registerEdit('code', { 
                                    required: 'Code is required',
                                    minLength: { value: 2, message: 'Code must be at least 2 characters' }
                                })}
                            />
                            {errorsEdit.code && (
                                <p className="text-red-500 text-sm mt-1">{errorsEdit.code.message}</p>
                            )}
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">Update Office</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Table className='mt-6'>
                <TableHeader className='mt-3'>
                    <TableRow>
                        <TableHead>Sr</TableHead>
                        <TableHead>Office Location</TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {office.map((office, index) => (
                        <TableRow key={office.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{office.location}</TableCell>
                            <TableCell>{office.code}</TableCell>
                            <TableCell className='flex items-center gap-4'>
                                <Button variant='outline' onClick={() => handleEdit(office)}>
                                    <PenBoxIcon />
                                </Button>
                                <Button onClick={() => handleDelete(office.id)}>
                                    <Trash2 />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default OfficeLocation