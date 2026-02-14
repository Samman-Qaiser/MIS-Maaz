import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  Users,
  Briefcase,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegistrationOverview = () => {
  // Mock data - replace with actual API calls
  const [stats] = useState({
    totalPersons: 125,
    totalUsers: 75,
    totalEmployees: 80,
    recentActivity: [
      {
        id: 1,
        name: "Ahmed Khan",
        type: "Person",
        date: "2026-01-27",
        status: "Active",
      },
      {
        id: 2,
        name: "Sara Ali",
        type: "User",
        date: "2026-01-27",
        status: "Active",
      },
      {
        id: 3,
        name: "Usman Shah",
        type: "Employee",
        date: "2026-01-26",
        status: "Active",
      },
      {
        id: 4,
        name: "Fatima Malik",
        type: "Person",
        date: "2026-01-26",
        status: "Pending",
      },
      {
        id: 5,
        name: "Hassan Raza",
        type: "User",
        date: "2026-01-25",
        status: "Active",
      },
    ],
  });

  const registrationCards = [
    {
      title: "Person Creation",
      description:
        "Create basic profile with personal details, contact info, and documents",
      icon: UserPlus,
      count: stats.totalPersons,
      step: "Step 1",
      link: "personcreation",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Employee Management",
      description:
        "Assign users to departments, roles, and work areas within the organization",
      icon: Briefcase,
      count: stats.totalEmployees,
      step: "Step 2",
      link: "employee",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "User Creation",
      description:
        "Convert persons to system users with login credentials and access rights",
      icon: Users,
      count: stats.totalUsers,
      step: "Step 3",
      link: "usercreate",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Registration Management
        </h1>
        <p className="text-slate-600">
          Complete the registration process in 3 simple steps
        </p>
      </div>

      {/* Workflow Indicator */}
      <div className="flex items-center justify-center gap-4 p-6 bg-foreground-secondary rounded-lg">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <UserPlus className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-semibold text-foreground">Person</span>
        </div>

        <ArrowRight className="text-slate-400" />
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-purple-600" />
          </div>
          <span className="font-semibold text-foreground">Employee</span>
        </div>
        <ArrowRight className="text-slate-400" />
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
            <Users className="h-5 w-5 text-green-600" />
          </div>
          <span className="font-semibold text-foreground">User</span>
        </div>
      </div>

      {/* Registration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {registrationCards.map((card) => (
          <Card
            key={card.title}
            className="relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-lg ${card.bgColor}`}>
                  <card.icon className={`h-6 w-6 ${card.color}`} />
                </div>
                <Badge variant="outline">{card.step}</Badge>
              </div>
              <CardTitle className="mt-4">{card.title}</CardTitle>
              <CardDescription className="text-sm">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-3xl font-bold">{card.count}</p>
                  <p className="text-xs text-slate-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Total Records
                  </p>
                </div>
                <Button
                  onClick={() => navigate(`/controlpannel/${card.link}`)}
                  className="z-10 cursor-pointer gap-2"
                >
                  Create New
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest registration records across all modules
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.recentActivity.map((activity) => (
                  <tr key={activity.id} className="border-b hover:bg-accent">
                    <td className="py-3 px-4 font-medium">{activity.name}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{activity.type}</Badge>
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {new Date(activity.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          activity.status === "Active"
                            ? "default"
                            : "bg-secondary"
                        }
                      >
                        {activity.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Footer */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.totalPersons}</p>
              <p className="text-xs text-slate-600">Total Persons</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.totalEmployees}</p>
              <p className="text-xs text-slate-600">Total Employees</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
              <p className="text-xs text-slate-600">Active Users</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationOverview;
