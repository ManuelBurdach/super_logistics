import fs from "fs";
const DB_PATH = "./data.json";

export const load = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(DB_PATH, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
};

export const save = (item) => {
  return new Promise((resolve, reject) => {
    load().then((data) => {
      data.push(item);
      fs.writeFile(DB_PATH, JSON.stringify(data), (err) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  });
};
