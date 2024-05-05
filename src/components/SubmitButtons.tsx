"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function CreationSubmit() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          type="submit"
          size={"lg"}
        >
          Next
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
