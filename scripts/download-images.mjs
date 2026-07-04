import { writeFileSync } from "fs";
import { join } from "path";

const dir = join(process.cwd(), "public/images/projects");

const images = [
  ["cover.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/652910284_122201897438578431_7283509081977169417_n.jpg?stp=dst-jpg_tt6&cstp=mx960x603&ctp=s960x603"],
  ["project-01.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736045285_122213359154578431_5911532071634531169_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
  ["project-02.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/737502543_122213359088578431_5264835548258034012_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
  ["project-03.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/737758793_122213359064578431_1589146919053525096_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
  ["project-04.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736964565_122213359076578431_2098651810379750556_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
  ["project-05.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736396751_122213359052578431_1381766542158486567_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
  ["project-06.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/738546257_122213359022578431_4258780642725528807_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
  ["project-07.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736065681_122213358986578431_3316669038474634046_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
  ["project-08.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/738616297_122213358938578431_7253641837762714740_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414"],
];

for (const [name, url] of images) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      Referer: "https://www.facebook.com/",
    },
  });
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(dir, name), buffer);
  console.log(`${name}: ${buffer.length} bytes`);
}
