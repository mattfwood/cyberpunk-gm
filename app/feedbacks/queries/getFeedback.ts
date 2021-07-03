import { resolver, NotFoundError } from 'blitz';
import db from 'db';
import { z } from 'zod';

const GetFeedback = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, 'Required'),
});

export default resolver.pipe(
  resolver.zod(GetFeedback),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const feedback = await db.feedback.findFirst({ where: { id } });

    if (!feedback) throw new NotFoundError();

    return feedback;
  }
);
