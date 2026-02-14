import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { username } = useSelector((state) => state.user);
  const navigate=useNavigate()

  return (
    <Tooltip>
    <TooltipTrigger>
           <div className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-muted transition cursor-pointer"
    onClick={()=>navigate('/profile')}>
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className='border-b-primary'>{username ? username[0] : "U"}</AvatarFallback>
      </Avatar>
  
      <div className="leading-tight hidden sm:block">
        <p className="text-sm font-semibold text-foreground">
          {username}
        </p>
      </div>
    </div>
    </TooltipTrigger>
         <TooltipContent>Your Profile</TooltipContent>
    </Tooltip>
  
  );
};

export default Profile;
