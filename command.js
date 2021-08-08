import chalk from "chalk";
import Dictionary from "./dictionary.js";

const dic = new Dictionary();

// Printing string, boolean and Array to console with chalk yellow
const consolePrint = (input) => {
  if (Array.isArray(input)) {
    console.log(chalk.yellow(input.join("\n")));
  } else {
    console.log(chalk.yellow(input));
  }
};

// handle all input commands and pass the interaction to Dictionary class
const handler = (cmdArgs) => {
  const [command, arg1, arg2] = cmdArgs.split(" ");

  switch (command) {
    case "ADD":
      dic.addKeyWithMember(arg1, arg2);
      consolePrint("Added");
      break;
    case "MEMBERS":
      const members = dic.getMembersByKey(arg1);
      consolePrint(members);
      break;
    case "KEYS":
      const keys = dic.getKeys();
      consolePrint(keys);
      break;
    case "REMOVE":
      dic.removeMember(arg1, arg2);
      consolePrint("Removed");
      break;
    case "REMOVEALL":
      dic.removeAll(arg1);
      consolePrint("Removed");
      break;
    case "CLEAR":
      dic.clear(arg1);
      consolePrint("Cleared");
      break;
    case "KEYEXISTS":
      const isKeyAvailable = dic.keyExists(arg1);
      consolePrint(isKeyAvailable);
      break;
    case "MEMBEREXISTS":
      const isMemberAvailable = dic.membersExists(arg1, arg2);
      consolePrint(isMemberAvailable);
      break;
    case "ALLMEMBERS":
      const allMembers = dic.getAllMembers();
      consolePrint(allMembers);
      break;
    case "ITEMS":
      const items = dic.getItems();
      consolePrint(items);
      break;
  }
};

export default handler;
