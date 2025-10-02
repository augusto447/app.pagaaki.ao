import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell } from 'lucide-react'

export function Header() {
  return (
    <div className=" flex items-center gap-6 justify-end p-4 border ">
      <button className="text-neutral-700 cursor-pointer bg-gray-200 p-2 rounded-md">
        {' '}
        <Bell className="w-5 h-5 " />
      </button>
      <div className="flex items-center gap-2">
        <Avatar className=" ">
          <AvatarImage src="https://github.com/shadcn.png" />

          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <span>Augusto Manuel</span>
      </div>
    </div>
  )
}
