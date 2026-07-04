import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { join } from "path";

const dir = join(process.cwd(), "public/images/projects");

const images = [
  ["cover.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/652910284_122201897438578431_7283509081977169417_n.jpg?stp=dst-jpg_tt6&cstp=mx960x603&ctp=s960x603&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=VtAQIPHIkkIQ7kNvwGixEIC&_nc_oc=AdoE05n44c1e4Z-vTZ4yZlI312WTIwsiPAZXS6zpNPChrNuHHfO-QBzEHAyhU9nsTHw&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQCr_yz6g3go7VqDmfrJ3uymyEP96PuF89DGOPniM7qyMQ&oe=6A4ECB44"],
  ["project-01.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736045285_122213359154578431_5911532071634531169_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_ohc=LfWQ0s1hGtgQ7kNvwFR6RKi&_nc_oc=AdrFF5w_Bn_x46k6lfS3Hpb0bL7gr-ulxX-WnVsbI37_Bw0kAsViuPmVyxdlPuDJ48c&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQCaCvmFYsCKQBpcpCLJ1ws695oIcZxzVg694RryfCuwFA&oe=6A4ED74D"],
  ["project-02.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/737502543_122213359088578431_5264835548258034012_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=7szWY8uoSgQQ7kNvwFclVxu&_nc_oc=AdrPFt8Cn67LiAPRz-uzLwEqmGOuIoING9BhFIYjNRO5tLRA2CmpvlK7gdcTGgTVZdc&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQBsYm_jbVzBI3czZFC8iTyvufIwkqHzRYlT2wNS0U10yg&oe=6A4EC966"],
  ["project-03.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/737758793_122213359064578431_1589146919053525096_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Pj3IJNdCP90Q7kNvwFw8d92&_nc_oc=AdrGf5etLuLc-rgzB3LSYjH_DRNOFGDqZS89yxrf2aHI_tXj1XBzqzdDVoyHIvbf3QY&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQBcw1aN3X5SG0uggYwEDCmttUn3bA_prqAQTAq0WlJbGw&oe=6A4EF311"],
  ["project-04.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736964565_122213359076578431_2098651810379750556_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Ts-irWGA-PYQ7kNvwEIxBPm&_nc_oc=Adp-duS0h2oNHNwO6_2CMavXnsT6guIbViTncAX2JP5XrxBK6ePogShipHBVevZixHc&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQCPygTsBAJc6hS3sxxaW2ArZYQF5GIiq94GKJa3Huc7wg&oe=6A4EF107"],
  ["project-05.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736396751_122213359052578431_1381766542158486567_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=kxm4Er0XOKcQ7kNvwHi3o4_&_nc_oc=AdreRrpE00WyiEQMcDyK12DEKoC9KUkHM2bAwVIoHAcf4xlpVhJcq-bhntZ8ScfYpjQ&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQAcjuSmaO3DuglyOhmbwX_mCRid4mXGaiJOBYu1QgD9og&oe=6A4ED111"],
  ["project-06.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/738546257_122213359022578431_4258780642725528807_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=R0zbyoJEw7oQ7kNvwFUgTix&_nc_oc=AdpsxKJlJ6cZ7cUqIVa-tDV2RFJl7ivY4KxNtP9lMILkyhRRX1n3HqeibCpi7PrOAG0&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQCEAGYYNoq9w7lsu3AQHklBNtHtoQ2y714Skj_eIDqpkQ&oe=6A4EF361"],
  ["project-07.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/736065681_122213358986578431_3316669038474634046_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=2mz83xZ7e2QQ7kNvwHn7Sva&_nc_oc=AdpJOqwlI6ng6cJatdLWDTUA-T02o5Ww_ePmuVlNU81mnx2xznJ4xYbrbjFVG7ireTk&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQDN0fJvrP3sOqj6kLxMWZZxNPT8cy0HRv64vAiVgmbWaQ&oe=6A4EE9C5"],
  ["project-08.jpg", "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/738616297_122213358938578431_7253641837762714740_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=lptjf8KPwF4Q7kNvwEC7u4z&_nc_oc=AdoGtVH47x8cL6wXBaUMnz0TiREVbzenuqY_-BOgWyv4eOOf833WZWTyvKsV5YVY-e8&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=krnwrbfepmQCIgmyzkJIUA&_nc_ss=7b289&oh=00_AQCHyXs8cMZYfEG2vnN20AxEZuVBq7_doLEb_kbawVNfBQ&oe=6A4EF1D1"],
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://www.facebook.com/profile.php?id=61567352952805&sk=photos");

for (const [name, url] of images) {
  const response = await page.request.get(url);
  const buffer = await response.body();
  writeFileSync(join(dir, name), buffer);
  console.log(`${name}: ${buffer.length} bytes`);
}

await browser.close();
