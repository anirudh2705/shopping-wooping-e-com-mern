// import React from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const FilterSidebar = () => {
//   return (
//     <div>
//       <Sheet>
//         <SheetContent className="w-[400px] sm:w-[540px]">
//           <SheetHeader>
//             <SheetTitle>Are you absolutely sure?</SheetTitle>
//             <SheetDescription>
//               This action cannot be undone. This will permanently delete your
//               account and remove your data from our servers.
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// export default FilterSidebar;

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import FilterSidebarContent from "./FilterSidebarContent";

const FilterSidebar = () => {
  return (
    <div className="container">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" variant="ghost">
            <FilterIcon /> Filters
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="lg:static lg:translate-x-0 lg:shadow-none lg:w-64 overflow-auto "
        >
          {/* Add your filter content here */}
          <FilterSidebarContent />
        </SheetContent>
        <div className="lg:block hidden">
          <FilterSidebarContent />
        </div>
      </Sheet>
    </div>
  );
};

export default FilterSidebar;
