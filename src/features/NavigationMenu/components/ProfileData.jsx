import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import InfoField from "../../../components/ui/InfoField"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import departments from "@/data/department"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"

import {
  User,
  Briefcase,
  GraduationCap,
  Shield,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Clock,
  Users,
  Workflow,
} from "lucide-react"
import { useSelector } from "react-redux"


// import TimelineItem from "@/components/ui/TimelineItem"
import { FcLeave } from "react-icons/fc";
const ProfileData = () => {
  const [activeTab, setActiveTab] = useState("personal")
  const { username } = useSelector((state) => state.user)
  const userProfile = {
    personal: {
      fullName: username,
      guardianName: "Muhammad Khan",
      cnic: "42101-XXXXXXX-X",
      dob: "1996-05-12",
      gender: "Male",
      email: "ahmed@company.com",
      mobile: "+92 300 1234567",
      religion: "Islam",
      bloodGroup: "B+",
      address: "Gulshan-e-Iqbal",
      city: "Karachi",
      country: "Pakistan",
      maritalStatus: "Single",
    },
    education: [
      {
        degree: "Bachelor (16 Years)",
        institute: "University of Karachi",
        major: "Computer Science",
        obtainedMarks: "3.8",
        totalMarks: "4.0",
      },

    ],
    experience: [
      {
        companyname: "ABC Solutions",
        designation: "Frontend Developer",
        jobstartdate: "2021-01-01",
        jobenddate: "2023-06-01",
      },
      {
        companyname: "ABC Solutions",
        designation: "Frontend Developer",
        jobstartdate: "2021-01-01",
        jobenddate: "2023-06-01",
      },
    ],
    employee: {
      company: "XYZ Technologies",
      client: "US Healthcare",
      jobTitle: "Software Engineer",
      shift: "Night",
      manager: "Ali Raza",
      joiningDate: "2021-01-10",
      status: "Active",
      biometricCode: "BIO-2041",
    },
    account: {
      username: "ahmed.khan",
      role: "Admin",
      status: "Active",
      modules: departments,
    },
  }





  return (
    <div className="min-h-screen bg-background">


      <div className="max-w-7xl mx-auto p-6 space-y-6">

        {/* ===== Hero Profile Header ===== */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80 p-8 shadow-2xl animate-fade-in-up">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-secondary to-accent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <Avatar className="relative h-32 w-32 border-4 border-white shadow-2xl">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback className="bg-linear-to-br from-primary to-primary/80 text-white text-4xl font-bold uppercase">
                  {userProfile.personal.fullName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-secondary border-4 border-white rounded-full p-1.5 shadow-lg">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {userProfile.personal.fullName}
              </h1>
              <p className="text-xl text-primary-foreground/90 font-medium mb-4">
                {userProfile.employee.jobTitle} at {userProfile.employee.company}
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-1.5 text-sm">
                  <Shield className="w-3.5 h-3.5 mr-1.5" />
                  {userProfile.account.role}
                </Badge>
                <Badge className="bg-secondary text-secondary-foreground border-secondary/50 px-4 py-1.5 text-sm shadow-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                  {userProfile.account.status}
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-1.5 text-sm">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  {userProfile.employee.shift} Shift
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{userProfile.personal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{userProfile.personal.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{userProfile.personal.city}, {userProfile.personal.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ===== Modern Tabs ===== */}
        <div className="animate-fade-in-up stagger-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="bg-card rounded-2xl shadow-lg p-2 border-none">
              <TabsList className="grid grid-cols-6 w-full bg-muted rounded-xl p-1 gap-1">
                <TabsTrigger
                  value="personal"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger
                  value="employee"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Employee</span>
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Account</span>
                </TabsTrigger>
                <TabsTrigger
                  value="leaves"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <FcLeave className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Leaves</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ===== Personal Info ===== */}
            <TabsContent value="personal" className="animate-slide-in">
              <Card className="border-none shadow-xl bg-card rounded-2xl overflow-hidden">
                <CardHeader className="bg-linear-to-r from-muted/50 to-primary/10 border-b border-border pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">Personal Information</CardTitle>
                      <CardDescription className="text-muted-foreground">Complete identity and contact details</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <InfoField icon={User} label="Full Name" value={userProfile.personal.fullName} />
                    <InfoField icon={User} label="Guardian Name" value={userProfile.personal.guardianName} />
                    <InfoField icon={Award} label="CNIC" value={userProfile.personal.cnic} />
                    <InfoField icon={Calendar} label="Date of Birth" value={userProfile.personal.dob} />
                    <InfoField icon={User} label="Gender" value={userProfile.personal.gender} />
                    <InfoField icon={Mail} label="Email" value={userProfile.personal.email} />
                    <InfoField icon={Phone} label="Mobile" value={userProfile.personal.mobile} />
                    <InfoField icon={User} label="Religion" value={userProfile.personal.religion} />
                    <InfoField icon={User} label="Blood Group" value={userProfile.personal.bloodGroup} />
                    <InfoField icon={MapPin} label="Address" value={userProfile.personal.address} />
                    <InfoField icon={MapPin} label="City" value={userProfile.personal.city} />
                    <InfoField icon={MapPin} label="Country" value={userProfile.personal.country} />
                    <InfoField icon={User} label="Marital Status" value={userProfile.personal.maritalStatus} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== Education ===== */}
            <TabsContent value="education" className="animate-slide-in">
              <Card className="border-none shadow-xl bg-card rounded-2xl overflow-hidden">
                <CardHeader className="bg-linear-to-r from-muted/50 to-secondary/10 border-b border-border pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/20 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">Educational Background</CardTitle>
                      <CardDescription className="text-muted-foreground">Academic qualifications and achievements</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {userProfile.education.map((edu, i) => (
                    <div key={i} className="bg-linear-to-br from-muted/30 to-secondary/5 rounded-2xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                          <p className="text-lg text-primary font-semibold">{edu.institute}</p>
                        </div>
                        <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/30 px-4 py-2">
                          <Award className="w-4 h-4 mr-2" />
                          GPA: {edu.obtainedMarks}/{edu.totalMarks}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="px-4 py-2 bg-card rounded-lg border border-border">
                          <span className="text-sm font-medium">Major: {edu.major}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== Experience ===== */}
            <TabsContent value="experience" className="animate-slide-in">
              <Card className="border-none shadow-xl bg-card rounded-2xl overflow-hidden">
                <CardHeader className="bg-linear-to-r from-muted/50 to-accent/10 border-b border-border pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/20 rounded-xl">
                      <Briefcase className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">Work Experience</CardTitle>
                      <CardDescription className="text-muted-foreground">Professional career timeline</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">

                  <Timeline position="alternate">
  {userProfile?.experience?.map((exp, i) => (
    <TimelineItem key={i}>
      
      <TimelineOppositeContent sx={{ fontSize: 12, color: "primary" }}>
        {exp.jobstartdate} – {exp.jobenddate || "Present"}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot color="primary">
          <Workflow fontSize="small" />
        </TimelineDot>
        {i !== userProfile.experience.length - 1 && <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <div className="bg-card border rounded-xl p-4 shadow-sm">
          <h4 className="font-bold">{exp.designation}</h4>
          <p className="text-sm text-muted-foreground">{exp.companyname}</p>
        </div>
      </TimelineContent>

    </TimelineItem>
  ))}
</Timeline>

                 

                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== Employee ===== */}
            <TabsContent value="employee" className="animate-slide-in">
              <Card className="border-none shadow-xl bg-card rounded-2xl overflow-hidden">
                <CardHeader className="bg-linear-to-r from-muted/50 to-secondary/10 border-b border-border pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/20 rounded-xl">
                      <Building2 className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">Employment Details</CardTitle>
                      <CardDescription className="text-muted-foreground">Current position and work information</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <InfoField icon={Building2} label="Company" value={userProfile.employee.company} />
                    <InfoField icon={Users} label="Client" value={userProfile.employee.client} />
                    <InfoField icon={Briefcase} label="Job Title" value={userProfile.employee.jobTitle} />
                    <InfoField icon={Clock} label="Shift" value={userProfile.employee.shift} />
                    <InfoField icon={User} label="Manager" value={userProfile.employee.manager} />
                    <InfoField icon={Calendar} label="Joining Date" value={userProfile.employee.joiningDate} />
                    <InfoField icon={Shield} label="Status" value={userProfile.employee.status} />
                    <InfoField icon={Award} label="Biometric Code" value={userProfile.employee.biometricCode} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== Account ===== */}
            <TabsContent value="account" className="animate-slide-in">
              <Card className="border-none shadow-xl bg-card rounded-2xl overflow-hidden">
                <CardHeader className="bg-linear-to-r from-muted/50 to-primary/10 border-b border-border pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">Account Settings</CardTitle>
                      <CardDescription className="text-muted-foreground">User credentials and system access</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-linear-to-br from-muted/30 to-primary/5 rounded-xl p-5 border border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Username</p>
                      <p className="text-xl font-bold text-foreground mono">{userProfile.account.username}</p>
                    </div>
                    <div className="bg-linear-to-br from-muted/30 to-primary/5 rounded-xl p-5 border border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Role</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary/10 text-primary border-primary/30 px-3 py-1 text-base">
                          <Shield className="w-4 h-4 mr-2" />
                          {userProfile.account.role}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-primary" />
                      <p className="text-lg font-bold text-foreground">Authorized Modules</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {userProfile.account.modules.map((m, idx) => (
                        <Badge
                          key={m.id}
                          className="bg-linear-to-r from-primary/10 to-secondary/10 text-foreground border-border px-4 py-2.5 text-sm font-medium hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full " />
                          {m.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='leaves' className='animate-slide-in'>
              <Card className='p-4'>leaves section will come here</Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ProfileData