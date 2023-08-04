

const fs = require("fs");
const jsonFile = "./input/airport_in.json";

const domesticFile = "./output/domestic.txt";

const readJson = async () => {
  const data = await fs.readFileSync(jsonFile, "utf8");
  const json = JSON.parse(data);
  return json;
};

(async () => {
    const json = await readJson();
    let i = 0;
    for (let item of json.datas) {
        if (i < 5) {
            const line = `${i+1}##${item.airport_code}##${item.airport_en_name}##${item.city_en_name}##${item.timezone.leng??" "}##${item.city_keywords}`
            await fs.appendFileSync(domesticFile, line + '\n', "utf8");
            console.log(line);
        }
        i+=1;
    }
    
})();
