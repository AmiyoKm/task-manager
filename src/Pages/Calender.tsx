import { Calendar } from '@/components/ui/calendar'
import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'

const Calender = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const {tasks } = useContext(GlobalContext)
console.log(tasks)
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