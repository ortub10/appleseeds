const fs = require("fs");
const uniqueId = require("uniqid");
module.exports = class {
  constructor() {
    if (!fs.existsSync("./files")) {
      fs.mkdirSync("./files");
    }
    if (!fs.existsSync("./users.json")) {
      fs.writeFileSync("./users.json", "[]", "utf-8");
    }
    this.path = "./users.json";
  }
  read() {
    try {
      const users = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      return users;
    } catch (err) {
      console.error(err);
    }
  }
  push(newUser) {
    try {
      if (!newUser)
        throw new Error(`Element To Add is ${typeof newUser} Please change It`);
      const users = this.read();
      newUser.id = uniqueId.process();
      users.push(newUser);
      fs.writeFileSync(this.path, JSON.stringify(users), "utf-8");
      console.log("saved!!");
    } catch (err) {
      console.error(err);
    }
  }
  delete(key, identifier) {
    try {
      if (!key || !identifier)
        throw new Error(
          `params key:${typeof key} identifier:${typeof identifier} Something Went Wrong`
        );
      const users = this.read();
      let userName = "";
      const newUsers = users.filter((user) => {
        if (user[key] === identifier) {
          userName = user.name;
          return false;
        } else {
          return true;
        }
      });
      console.log(userName);
      fs.writeFileSync(this.path, JSON.stringify(newUsers), "utf-8");
      console.log("deleted!!");
    } catch (err) {
      console.error(err);
    }
  }

  updateDoc(key, identifier, updatedUser) {
    try {
      const users = this.read();
      const docIndex = users.findIndex((user) => user[key] === identifier);
      if (docIndex === -1) throw Error("Doc is not found 404");
      users[docIndex] = {
        ...users[docIndex],
        ...updatedUser,
      };
      fs.writeFileSync(this.path, JSON.stringify(users), "utf-8");
      console.log("updated!!");
    } catch (err) {
      console.error(err);
    }
  }
  createPassword(identifier, password) {
    try {
      const users = this.read();
      const docIndex = users.findIndex((user) => user.id === identifier);
      if (docIndex === -1) throw Error("Doc is not found 404");
      users[docIndex] = { ...users[docIndex], password: password };

      fs.writeFileSync(this.path, JSON.stringify(users), "utf-8");
      console.log("add password!!");
    } catch (err) {
      console.error(err);
    }
  }
};
