import { object, string } from "yup";

export const candidateSchema = object({
  file: string().max(500).required(),
});

export const statusOfApplication = object({
  status: string().oneOf(["confirmed", "rejected"], "Status ERROR").required(),
});
