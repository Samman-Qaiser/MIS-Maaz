import React, { useState } from "react";
import { persons } from "../../../data/employee";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DeleteIcon, PenBoxIcon, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const UserUpdate = () => {
  const [search, setSearch] = useState("");
  const navigate=useNavigate()
  const filteredPersons = persons.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.cnic.includes(search),
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Update User Information</h1>
          <p className="text-sm text-muted-foreground">
            Search and manage registered users
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72 rounded-full">
      
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or CNIC..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 border-r-2 focus:outline-none border-accent border-2 "
          />
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableCaption>A list of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>CNIC</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredPersons.length > 0 ? (
            filteredPersons.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.cnic}</TableCell>
                <TableCell className="flex justify-end gap-3">
                <Button variant='outline' onClick={()=>navigate(`${item.id}`)}>
                  <PenBoxIcon />
                </Button>
             

                  <Popover>
                    <PopoverTrigger asChild>
                    <Button>
                      <Trash2 />
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">
                      <PopoverHeader>
                        <PopoverTitle className="text-sm">
                          Are you sure you want to delete?
                        </PopoverTitle>
                      </PopoverHeader>
                      <Button
                   
                        size="sm"
                        className="mt-3 w-full"
                      >
                        Delete
                      </Button>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center text-muted-foreground"
              >
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserUpdate;
