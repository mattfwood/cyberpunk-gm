import { resolver } from 'blitz';
import db from 'db';
import { z } from 'zod';

const DeleteFeedback = z.object({
  id: z.number(),
});

export default resolver.pipe(
  resolver.zod(DeleteFeedback),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const feedback = await db.feedback.deleteMany({ where: { id } });

    return feedback;
  }
);
