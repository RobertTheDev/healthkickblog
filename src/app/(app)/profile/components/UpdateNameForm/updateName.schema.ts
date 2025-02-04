import { z } from 'zod';

export const updateNameSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.'),
});

export type UpdateNameSchemaType = z.infer<typeof updateNameSchema>;
