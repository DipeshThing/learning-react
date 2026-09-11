import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"

import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
      <Card className="min-w-sm">
        <CardHeader className="mb-5">
          <CardTitle>Log Into Your Account</CardTitle>
          <CardDescription>
            Enter Your Email to Log Into Your Account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
            <form>
                <div className="flex flex-col gap-2">
                    <div>
                        <Label>Email:</Label>
                    </div>
                    <Input></Input>
                    <div className="flex justify-between">
                        <Label>Password:</Label>
                        <a className="hover:underline active:underline text-orange-400" href="#">Forget a Password?</a>
                    </div>
                    <Input></Input>
                </div>
            </form>
        </CardContent>
        <CardFooter className="gap-2">
            <Button className="bg-orange-400 w-full hover:bg-orange-300" type="submit">Sign In</Button>
            <Button className="w-full" variant="outline">Login With Google</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
