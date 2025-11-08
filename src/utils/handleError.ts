import { AxiosError } from "axios";
import { FirebaseError } from "firebase/app";
import errorMessage from "./errorMessage";

export default function handleError(error: unknown): string {
  let msg = "";  
  if (error instanceof AxiosError) {
    if (error?.response?.data?.message instanceof Array) {
      msg = error.response.data?.message.map((ms: any) => ms.msg).join("\n");
    } else if (typeof error?.response?.data === "string") {
      msg = error?.response?.data;
    } else {
      msg = error?.response?.data?.message;
    }
  } else if (error instanceof FirebaseError) {
    msg = errorMessage(error.code);
  } else if (error instanceof Error) {
    msg = errorMessage(error.message);
  } else {
    msg = "Unknown error";
  }

  return msg;
}
