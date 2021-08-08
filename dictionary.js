// A class to hold all transaction in Keys and its members
class Dictionary {
  keys = {};

  constructor() {}

  getKeys() {
    return Object.keys(this.keys);
  }

  addKeyWithMember(key, member) {
    if (this.keyExists(key)) {
      const index = this.keys[key].indexOf(member);
      if (index > -1) {
        return new Error("Member Already Exists");
      }

      this.keys[key].push(member);
    } else {
      this.keys[key] = [member];
    }
  }

  removeMember(key, member) {
    const index = this.keys[key].indexOf(member);
    if (index > -1) {
      this.keys[key].splice(index, 1);
    } else {
      new Error("No such member found");
    }
  }

  removeAll(key) {
    this.keys[key] = undefined;
  }

  clear() {
    this.keys = {};
  }

  keyExists(key) {
    return Boolean(this.keys[key]);
  }

  membersExists(key, member) {
    return this.keyExists(key) && this.keys[key].indexOf(member) > -1;
  }

  getMembersByKey(key) {
    return this.keys[key];
  }

  getAllMembers() {
    const res = [];
    Object.values(this.keys).forEach((e) => (e ? res.push(...e) : null));
    return res;
  }

  getItems() {
    const res = [];
    Object.keys(this.keys).forEach((k) => {
      this.keys[k].forEach((i) => {
        res.push({
          key: k,
          value: i,
        });
      });
    });
    return res;
  }
}

export default Dictionary;
