import { describe, expect, it, vi } from "vitest";
import { marriageFixer } from "../../src/utils/marriage";

describe("marriage", () => {
  it("should handle only marriage type", async () => {
    const next = vi.fn().mockResolvedValue("test");
    let data = { startAt: undefined };
    let ret = await marriageFixer({ uid: "test", data }, next);

    expect(ret).toBe("test");
    expect(data?.startAt).not.toBeDefined();
  });

  it("should handle only create/update action", async () => {
    const next = vi.fn().mockResolvedValue("test");
    let data = { startAt: undefined };
    const ctx = {
      uid: "api::an-marriage.an-marriage",
      params: { data },
      action: "find",
    };

    let ret = await marriageFixer(ctx, next);

    expect(ret).toBe("test");
    expect(data.startAt).not.toBeDefined();
  });

  it("should auto generate startAt date", async () => {
    const next = vi.fn().mockResolvedValue("test");
    let data = { startAt: undefined };
    const ctx = {
      uid: "api::an-marriage.an-marriage",
      params: { data },
      action: "create",
    };

    let ret = await marriageFixer(ctx, next);

    expect(ret).toBe("test");
    expect(data.startAt).toBeDefined();
  });
});
