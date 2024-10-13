import { Fullscreen } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";

const DetailProject = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 justify-center text-sm font-semibold bg-primary px-2 py-1 rounded-sm text-secondary-foreground">
        <Fullscreen size={18} /> Detail
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="max-h-[700px] w-full overflow-hidden relative">
            <img src={project.image} className="h-full w-full " alt="" />
            <p className="absolute bottom-2 left-2 px-3 py-2 bg-black text-white rounded-xl">
              Category: {project.category}
            </p>
          </div>
          <DialogFooter className=" justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="mt-3">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailProject;
