
/**
  Interprate player commands to determine which action to execute
*/
export default class MessageParser {

  static parse(msg: string): any {
    if (this.isBlank(msg)) {
      return {};
    } else {
      let splitted = msg.split(" ");
      // "cut" and retunr the first element of an array
      let command = splitted.shift();

      return {
        command: command,
        params: splitted
      };
    }
  }

  private static isBlank(str: string) {
    return (!str || /^\s*$/.test(str));
  }
};
