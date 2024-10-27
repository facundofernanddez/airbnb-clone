import { Dialog, DialogTrigger } from "./ui/dialog";

export default function SearchModalComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-full py-2 px-5 border flex items-center cursor-pointer">
          <div className="flec h-full divide-x font-medium">
            <p className="px-4">Anywhere</p>
            <p className="px-4">Any week</p>
            <p className="px-4">Add Guests</p>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  );
}
