export class Strings {
  static clientFriendlyString(value: string): string {
    return value
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}
