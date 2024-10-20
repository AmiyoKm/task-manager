import { Calendar } from '@/components/ui/calendar'
import React from 'react'

const Calender = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <>
 
  <div className="h-auto">

    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
  </div>
  </>
  
)

  
}

export default Calender