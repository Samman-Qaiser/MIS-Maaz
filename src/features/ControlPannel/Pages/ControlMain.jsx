import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"

import { 
  FaRegCalendarAlt, 
  FaRegClock, 
  FaUsers, 
  FaUserCheck, 
  FaBuilding, 
  FaTasks,
  FaPlus,
  FaChartBar,
  FaCog,
  FaQuestionCircle,

  FaSearch
} from "react-icons/fa"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom'
import { User2Icon } from 'lucide-react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import officeLocations from '../../../data/officeLocation'
export const ControlMain = () => {
  const { username } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const date = new Date()
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  // ✅ Quick Actions
  const quickActions = [
    { id: 1, label: 'Create Employee', icon: <FaPlus />, path: 'employee' },
    { id: 2, label: 'Create User Account', icon: <User2Icon />, path: 'usercreate' },
    { id: 3, label: 'Manage Modules', icon: <FaCog />, path: 'modules' },
    { id: 4, label: 'Manage Client', icon: <RiCustomerService2Fill />, path: 'client' },
  ]

  // ✅ Stats Data
  const statsData = {
    totalEmployees: 245,
    activeUsers: 128,
    departments: 15,
    pendingTasks: 7
  }

  // ✅ Recent Activities
  const recentActivities = [
    { id: 1, action: 'New employee created', user: 'John Doe', time: '10:30 AM' },
    { id: 2, action: 'User permissions updated', user: 'Sarah Smith', time: '9:45 AM' },
    { id: 3, action: 'Department added', user: 'Admin', time: 'Yesterday, 4:20 PM' },
    { id: 4, action: 'Report generated', user: 'Mike Johnson', time: 'Jan 28, 2:15 PM' }
  ]


  return (
    <div className="flex flex-col bg-background">
      <main className="flex-1 p-4 sm:p-6 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Welcome Card */}
          <Card className="bg-linear-to-r from-primary to-primary/90 border-primary">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl sm:text-3xl text-white flex items-center gap-2">
                  <span>👋</span>
                  Welcome back,
                  <span className="font-bold">{username}</span>
                </CardTitle>

                <CardDescription className="text-white/90 flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 text-sm sm:text-base">
                  <span className="flex items-center gap-2">
                    <FaRegCalendarAlt />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegClock />
                    {formattedTime}
                  </span>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* cards unchanged, already responsive */}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-semibold">Quick Actions</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.id}
                    variant="outline"
                    className="h-20 sm:h-24 flex flex-col gap-2"
                    onClick={() => navigate(action.path)}
                  >
                    <div className="text-xl sm:text-2xl text-primary">
                      {action.icon}
                    </div>
                    <span className="text-sm sm:text-base">{action.label}</span>
                  </Button>
                ))}
              </div>

              {/* Office Table */}
              <Card className="p-3">
                <CardTitle className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  List Of All Offices
                  <Button size="sm" onClick={() => navigate("officelocation")}>
                    View All
                  </Button>
                </CardTitle>

                <div className="overflow-x-auto mt-3">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sr</TableHead>
                        <TableHead>Office Location</TableHead>
                        <TableHead>Code</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {officeLocations.slice(0, 3).map((office, index) => (
                        <TableRow key={office.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{office.location}</TableCell>
                          <TableCell>{office.code}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <Card>
                <div className="p-5">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FaQuestionCircle className="text-blue-500" />
                    Quick Help
                  </h3>

                  <ul className="space-y-2 mt-3">
                    <li className="text-sm p-2 hover:bg-accent rounded">
                      How to create a new user?
                    </li>
                    <li className="text-sm p-2 hover:bg-accent rounded">
                      Managing department permissions
                    </li>
                    <li className="text-sm p-2 hover:bg-accent rounded">
                      Generating monthly reports
                    </li>
                  </ul>

                  <Button className="w-full mt-4" variant="outline">
                    Visit Help Center
                  </Button>
                </div>
              </Card>

            
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
