import fs from "fs";

export class OldStorageClass {
  constructor(protected filename: string) {}
  set(key: string, value: string): void {
    // garante que o arquivo sempre vai existir
    if (!fs.existsSync(this.filename)) {
      fs.openSync(this.filename, "w");
    }

    let data = fs.readFileSync(this.filename, { encoding: "utf-8" }).toString();
    const lines = data.split("\n");

    data = lines
      .filter((line) => {
        const [lkey] = line.split("=");

        return key !== lkey;
      })
      .concat(`${key}=${value}`)
      .join("\n");

    fs.writeFileSync(this.filename, data, {
      flag: "w",
      encoding: "utf-8",
    });
  }

  get(key: string): string | undefined {
    const data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .toString();

    const lines = data.split("\n");
    const foundLine = lines.find((line) => {
      const [lkey] = line.split("=");
      return key === lkey;
    });
    if (foundLine) {
      const [_, value] = foundLine.split("=");
      return value;
    }
  }
}
