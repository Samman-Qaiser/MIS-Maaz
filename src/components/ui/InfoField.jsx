import React from 'react'

 const InfoField = ({ icon: Icon, label, value }) => (
    <div className="group relative">
      <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-muted/50 to-muted/30 border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
        <div className="mt-0.5 p-2 rounded-lg bg-card shadow-sm group-hover:bg-primary/10 transition-colors duration-300">
          <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            {label}
          </p>
          <p className="text-sm font-semibold text-foreground wrap-break-word">
            {value}
          </p>
        </div>
      </div>
    </div>
  )

export default InfoField