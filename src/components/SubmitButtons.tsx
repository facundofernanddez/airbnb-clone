"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Heart, Loader2 } from "lucide-react";

export default function CreationSubmit() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          disabled
          size={"lg"}
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button
          type="submit"
          size={"lg"}
        >
          Next
        </Button>
      )}
    </>
  );
}

export function AddToFavorites() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          variant={"outline"}
          size={"icon"}
          disabled
          className="bg-primary-foreground"
        >
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size={"icon"}
          className="bg-primary-foreground"
          type="submit"
        >
          <Heart className="w-4 h-4" />
        </Button>
      )}
    </>
  );
}

export function DeleteFromFavorites() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          variant={"outline"}
          size={"icon"}
          disabled
          className="bg-primary-foreground"
        >
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size={"icon"}
          className="bg-primary-foreground"
          type="submit"
        >
          <Heart
            className="w-4 h-4 text-primary"
            fill="#E21C49"
          />
        </Button>
      )}
    </>
  );
}
