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
        throw new Error("ERROR, member already exists for key");
      }

      this.keys[key].push(member);
    } else {
      this.keys[key] = [member];
    }
  }

  removeMember(key, member) {
    if (this.keyExists(key)) {
      const index = this.keys[key].indexOf(member);
      if (index > -1) {
        this.keys[key].splice(index, 1);
      } else {
        throw new Error("ERROR, member does not exist");
      }
    } else {
      throw new Error("ERROR, key does not exist");
    }
  }

  removeAll(key) {
    if (this.keyExists(key)) {
      delete this.keys[key];
    } else {
      throw new Error("ERROR, key does not exist");
    }
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