import { faArrowLeft, faChevronLeft, faChevronRight, faComment, faEllipsisVertical, faInfo, faLock, faShare, faTableColumns } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

const Appbar = () => {
    const [dropdown,setdropdown] = useState(false);
  return (
    <div className="w-full h-6 flex font-mons ">
        <FontAwesomeIcon className="p-1 text-lg" icon={faTableColumns} />
        <FontAwesomeIcon icon={faChevronLeft}  className="p-1 px-1"/>
        <FontAwesomeIcon icon={faChevronRight}  className="p-1 px-1"/>
        <FontAwesomeIcon icon={faLock} className="p-1 px-1" />
        <h1 className="text-sm  line-clamp-1 p-1 px-2 ">My private channel/👋Getting started</h1>
        <FontAwesomeIcon icon={faEllipsisVertical} className="py-2 px-2" onClick={()=>setdropdown(!dropdown)} />
        {dropdown && (
      <div className="absolute top-10 right-6 flex flex-col gap-8 p-4 bg-white shadow-xl rounded-lg ">
        <h1><FontAwesomeIcon icon={faShare} />Share</h1>
        <h1><FontAwesomeIcon icon={faComment} className="mr-1 " />Comment</h1>
        <h1>⭐Star</h1>
        <h1><FontAwesomeIcon icon={faInfo} className="px-2" />More</h1>
  </div>
    )}
    </div>
  )
}

export default Appbar
