import { resolver } from 'blitz';
import db from 'db';
import { z } from 'zod';

const CreateFeedback = z.object({
  username: z.string(),
  message: z.string(),
});

export default resolver.pipe(resolver.zod(CreateFeedback), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const feedback = await db.feedback.create({ data: input });

  return feedback;
});
