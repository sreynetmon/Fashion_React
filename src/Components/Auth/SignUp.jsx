



import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function SignUpComponent() {
    return (
        <div className="flex justify-center items-center h-screen ">
            <form className="flex max-w-md flex-col gap-4 border-1 p-5 rounded-lg w-[50%] h-auto">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1">Your email</Label>
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1">Your password</Label>
                </div>
                <TextInput id="password1" type="password" required />
            </div>
            <div>
                 
                <div className="mb-2 block">
                    <Label htmlFor="password1">Confirm password</Label>
                </div>
                <TextInput id="password1" type="password" required />
            
            </div>


            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}
