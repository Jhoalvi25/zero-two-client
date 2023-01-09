import { ErrorResponse } from "./types";

export function isError (input: any): input is ErrorResponse {
    if (input !== null && input.hasOwnProperty('error')) return true;
    else return false;
}