import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { FaHistory } from "react-icons/fa";

/* ---------------- DATA ---------------- */
const initialData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    loginTime: "09:10 AM",
    logoutTime: "05:05 PM",
    loginDate: "2026-01-28",
    active: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    loginTime: "10:00 AM",
    logoutTime: null,
    loginDate: "2026-01-29",
    active: true,
  },
];

/* ---------------- COMPONENT ---------------- */
const Help = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const { control, watch } = useForm({
    defaultValues: {
      pageSize: "10",
    },
  });

  const pagesize = Number(watch("pageSize"));

  /* Fake API delay */
  useEffect(() => {
    setTimeout(() => {
      setData(initialData);
      setLoading(false);
    }, 1500);
  }, []);

  /* ---------------- COLUMNS ---------------- */
  const columns = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting()}>
          Name <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "loginDate", header: "Date" },
    { accessorKey: "loginTime", header: "Login Time" },
    {
      accessorKey: "logoutTime",
      header: "Logout Time",
      cell: ({ getValue }) => getValue() || "—",
    },
    {
      accessorKey: "active",
      header: "Status",
      cell: ({ getValue }) => (
        <Badge
          className={
            getValue()
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }
        >
          {getValue() ? "Active" : "Inactive"}
        </Badge>
      ),
    },
  ];

  /* ---------------- TABLE ---------------- */
  const table = useReactTable({
    data: dateFilter
      ? data.filter((row) => row.loginDate === dateFilter)
      : data,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize },
    },
  });

  useEffect(() => {
    table.setPageSize(pageSize);
  }, [pageSize]);

  /* ---------------- UI ---------------- */
  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex flex-col gap-4">
          <CardTitle className="flex items-center gap-2">
            <FaHistory /> User Login Logs
          </CardTitle>

          {/* Filters */}
          <div className="lg:flex flex-wrap gap-4 block space-y-4">
            <Input
              placeholder="Search name/email..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="w-64"
            />

            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-48 lg:inline block"
            />
            <Controller
              control={control}
              name="pageSize"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className='w-40'>
                    <SelectValue placeholder="Rows" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="10">10 rows</SelectItem>
                    <SelectItem value="20">20 rows</SelectItem>
                    <SelectItem value="50">50 rows</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </CardHeader>

        <CardContent>
          {loading ? (
            /* -------- Skeleton Loading -------- */
            Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex gap-4 mb-3">
                <Skeleton className="h-6 w-full" />
              </div>
            ))
          ) : (
            <>
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((hg) => (
                    <TableRow key={hg.id}>
                      {hg.headers.map((header) => (
                        <TableHead key={header.id}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>

                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;
