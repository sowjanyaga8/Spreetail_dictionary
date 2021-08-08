import Dictionary from "../dictionary";

describe("Testing Handler Function", () => {
  const dic = new Dictionary();

  it("Should Add Keys to Dictionary", () => {
    dic.addKeyWithMember("foo", "bar");
    expect(dic.getKeys()[0]).toBe("foo");
  });

  it("Should print members of a key", () => {
    dic.addKeyWithMember("foo", "baz");
    expect(dic.getMembersByKey("foo")).toEqual(["bar", "baz"]);
  });

  it("Should return true if a key exists", () => {
    expect(dic.keyExists("foo")).toBe(true);
  });

  it("Should return false if a key does not exists", () => {
    expect(dic.keyExists("test")).toBe(false);
  });

  it("Should return true if a member exists", () => {
    expect(dic.membersExists("foo", "bar")).toBe(true);
  });

  it("Should return false if a member does not exists", () => {
    expect(dic.membersExists("foo", "test")).toBe(false);
  });

  it("Should return all members if exists", () => {
    dic.addKeyWithMember("bang", "zip");
    dic.addKeyWithMember("bang", "test");

    expect(dic.getAllMembers()).toEqual(["bar", "baz", "zip", "test"]);
  });

  it("Should return all keys if exists", () => {
    expect(dic.getKeys()).toEqual(["foo", "bang"]);
  });

  it("Should return all items", () => {
    expect(dic.getItems()).toEqual([
      {
        key: "foo",
        value: "bar",
      },
      {
        key: "foo",
        value: "baz",
      },
      {
        key: "bang",
        value: "zip",
      },
      {
        key: "bang",
        value: "test",
      },
    ]);
  });

  it("should remove members of a key", () => {
    dic.removeMember("foo", "baz");
    expect(dic.getMembersByKey("foo")).toEqual(["bar"]);
  });

  it("should remove all members of a key", () => {
    dic.removeAll("foo");
    expect(dic.getMembersByKey("foo")).toEqual(undefined);
  });

  it("should clear all keys", () => {
    dic.clear();
    expect(dic.getKeys()).toEqual([]);
  });
});
