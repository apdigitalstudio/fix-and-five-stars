import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const auditSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  business_name: z.string().trim().min(1, "Please enter your business name").max(150),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30)
    .regex(/^[0-9+()\-.\s]+$/, "Please enter a valid phone number"),
});

export const submitAudit = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => auditSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("audit_requests").insert(data);
    if (error) {
      console.error("audit insert failed", error);
      throw new Error("Could not save your request. Please try again.");
    }
    return { ok: true };
  });
