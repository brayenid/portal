import moment, { Moment } from "moment";

export async function marriageFixer(ctx, next) {
  if (!["api::an-marriage.an-marriage"].includes(ctx.uid)) {
    return await next();
  }

  if (!["create", "update"].includes(ctx.action)) {
    return await next();
  }

  const { data } = ctx.params;

  // auto generate startAt
  if (!data.startAt) {
    const sunday = 7;
    const today = moment().isoWeekday();
    let startAt: Moment = null;
    if (today <= sunday) {
      startAt = moment().isoWeekday(sunday);
    } else {
      startAt = moment().add(1, "weeks").isoWeekday(sunday);
    }
    data.startAt = startAt.format("YYYY-MM-DD");
  }

  return await next();
}
