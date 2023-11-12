"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root>
        <TextField.Input placeholder="Tex..." />
      </TextField.Root>
      {/* <TextArea placeholder="Description..." /> */}
      <SimpleMDE placeholder="Description..." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;