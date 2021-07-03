import { paginate, resolver } from 'blitz';
import db, { Prisma } from 'db';

interface GetFeedbacksInput
  extends Pick<
    Prisma.FeedbackFindManyArgs,
    'where' | 'orderBy' | 'skip' | 'take'
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetFeedbacksInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: feedbacks,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.feedback.count({ where }),
      query: (paginateArgs) =>
        db.feedback.findMany({ ...paginateArgs, where, orderBy }),
    });

    return {
      feedbacks,
      nextPage,
      hasMore,
      count,
    };
  }
);
