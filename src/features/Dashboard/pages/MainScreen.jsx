import React from "react"
import Header from "../../NavigationMenu/components/Header"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useSelector } from "react-redux"
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa"

const MainScreen = () => {
  const { username } = useSelector((state) => state.user)

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

  return (
    <div className="flex flex-col h-screen w-screen bg-background">
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-primary border-primary mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <span className="animate-wave">👋</span> Welcome, {username} 
              </CardTitle>

              <CardDescription className="text-white/80 flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  <FaRegCalendarAlt />
                  {formattedDate}
                </span>

                <span className="flex items-center gap-1">
                  <FaRegClock />
                  {formattedTime}
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default MainScreen
