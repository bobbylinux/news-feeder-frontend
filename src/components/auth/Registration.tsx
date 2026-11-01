import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";

function Registration() {
  return (
    <div className="flex justify-center mt-50">
      <Card className="w-full max-w-lg px-15">
        <h1 className="text-2xl mb-7">Sign in</h1>
        <FieldGroup className="grid max-w-sm grid-cols-2">
          <Field>
            <FieldLabel htmlFor="first-name">First Name</FieldLabel>
            <Input id="first-name" type="text" />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
            <Input id="last-name" type="text" />
          </Field>
        </FieldGroup>
        <FieldGroup className="grid max-w-sm grid-cols-1 mt-5">
          <FieldLabel htmlFor="email">E-Mail</FieldLabel>
          <Input id="email" type="email" />
        </FieldGroup>
        <FieldGroup className="grid max-w-sm grid-cols-1 mt-5">
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" />
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="username" type="password" />
        </FieldGroup>
        <FieldGroup className="grid max-w-sm grid-cols-1 my-10">
          <Button>Submit</Button>
        </FieldGroup>
      </Card>
    </div>
  );
}

export default Registration;
