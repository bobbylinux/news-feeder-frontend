import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import { PlateEditor } from "@/components/editor/plate-editor";
import { Textarea } from "../ui/textarea";

function CreateNews() {
  const textAreaRows = 10;

  return (
    <div className="grid text-center px-24">
      <h1 className="text-2xl mb-7">Create Article</h1>
      <FieldGroup className="grid grid-cols-1">
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input id="title" type="text" />
      </FieldGroup>
      <FieldGroup className="grid grid-cols-1 mt-5">
        <FieldLabel htmlFor="body">Body</FieldLabel>
        <Textarea
          className="field-sizing-fixed"
          data-slot="textarea"
          id="body"
          name="body"
          rows={textAreaRows}
        />
      </FieldGroup>

      <FieldGroup className="grid grid-cols-1 my-10">
        <Button>Create</Button>
      </FieldGroup>
    </div>
  );
}

export default CreateNews;
