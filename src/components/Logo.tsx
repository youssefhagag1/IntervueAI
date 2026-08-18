import { cn } from '@/lib/utils'
import React from 'react'

function Logo({className}: {className?: string}) {
  return (
    <h1 className={cn("text-primary text-3xl font-bold", className)}>IntervueAI</h1>
  );
}

export default Logo
