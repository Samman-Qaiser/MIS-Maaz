import React, { useState, useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpCircle, CameraIcon, User2Icon } from "lucide-react"
import { toast } from "react-toastify"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  FaArrowCircleRight } from "react-icons/fa"
import { IoBagRemove } from "react-icons/io5"
import PersonalInfo from "./PersonalInfo"
import { FaGoogleScholar } from "react-icons/fa6";
import EducationDetail from "./Educationdetail"
import Experiencedetail from "./Experiencedetail"
const PersonCreation = () => {
  const methods = useForm({
    defaultValues: {
      picture: null,
      fullName: "",
      guardianName: "",
      cnic: "",
      dob: "",
      gender: "",
      email: "",
      mobile: "",
      religion: "",
      bloodGroup: "",
      address: "",
      city: "",
      country: "",
      maritalStatus: "",
    },
  })

  const [activeTab, setActiveTab] = useState("personal")
  const [preview, setPreview] = useState(null)

  const { handleSubmit, setValue, trigger } = methods

  // Handle picture upload
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size should not be greater than 2MB")
      return
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      toast.error("Only JPG or PNG images are allowed")
      return
    }

    setValue("picture", file)

    const reader = new FileReader()
    reader.onloadend = () => setPreview(reader.result)
    reader.readAsDataURL(file)

    toast.success("Picture uploaded successfully")
  }

  // Move to next tab
  const goNext = async () => {
    // Validate only the current tab fields
    let fieldsToValidate = []
    if (activeTab === "personal") {
      fieldsToValidate = [
        "fullName",
        "guardianName",
        "cnic",
        "dob",
        "gender",
        "email",
        "mobile",
        "religion",
        "bloodGroup",
        "address",
        "city",
        "country",
        "maritalStatus",
      ]
    } else if (activeTab === "education") {
      fieldsToValidate = ["educationField1", "educationField2"] // Replace with your fields
    } else if (activeTab === "experience") {
      fieldsToValidate = ["experienceField1", "experienceField2"] // Replace with your fields
    }

    const isValid = await trigger(fieldsToValidate)
    if (!isValid) {
      toast.error("Please fill all required fields in this section!")
      return
    }

    if (activeTab === "personal") setActiveTab("education")
    else if (activeTab === "education") setActiveTab("experience")
  }

  // Submit final form
  const onSubmit = async (data) => {
    const isValid = await trigger() // validate all fields
    if (!isValid) {
      toast.error("Please fill all required fields!")
      return
    }
    console.log("FINAL FORM DATA 👉", data)
    toast.success("Person saved successfully!")
    // send data to backend API here
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-4 p-2">
          <Avatar className="h-24 w-24">
            <AvatarImage src={preview} />
            <AvatarFallback>
              <CameraIcon />
            </AvatarFallback>
          </Avatar>

          <div className="w-[40%] space-y-3">
            <h1 className="font-bold text-primary">Profile Picture</h1>
            <p className="text-xs text-gray-500">
              Upload a professional headshot. PNG / JPG, max 2MB.
            </p>

            <input
              type="file"
              accept="image/png, image/jpeg"
              id="picture"
              className="hidden"
              onChange={handleImageChange}
            />

            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("picture").click()}
            >
              <ArrowUpCircle /> Choose Picture
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full bg-transparent border-b">
            <TabsTrigger value="personal" className="flex gap-2 bg-transparent rounded-none text-gray-500 border-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:font-semibold">
              <User2Icon size={16} /> Personal Information
            </TabsTrigger>

            <TabsTrigger value="education" className="flex gap-2 bg-transparent rounded-none text-gray-500 border-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:font-semibold">
              <FaGoogleScholar /> Education Details
            </TabsTrigger>

            <TabsTrigger value="experience" className="flex gap-2 bg-transparent rounded-none text-gray-500 border-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:font-semibold">
              <IoBagRemove /> Experience Detail
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="personal">
            <PersonalInfo />
            <Button onClick={goNext} className="mt-4 ml-4">
              <FaArrowCircleRight /> Next
            </Button>
          </TabsContent>

          <TabsContent value="education">
            <div>
                <EducationDetail />
            </div>
            <Button onClick={goNext} className="mt-4 ml-4">
              <FaArrowCircleRight /> Next
            </Button>
          </TabsContent>

          <TabsContent value="experience">
       <Experiencedetail />
            <div className="flex gap-2 mt-4 ml-4">
              <Button type="button" onClick={() => setActiveTab("education")}>
                Back
              </Button>
              <Button type="submit">
                Save
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </FormProvider>
  )
}

export default PersonCreation
