
document.body.style.backgroundColor = "#141414"
const container = document.createElement("div");
container.style.backgroundColor = "#1f1f1f";
container.style.color = "white";
container.style.width = "384px";
container.style.height = "611px";
container.style.margin = "174px 528px";
container.style.padding = "40px";
container.style.borderRadius = "12px";
container.style.gap = "24px"
container.style.fontFamily = "Arial, sans-serif";
container.style.textAlign = "center";
document.body.appendChild(container);



const image = document.createElement("img");
container.appendChild(image);
image.src = "./images/profile-pic.png"; 
image.style.cssText = `width = "88px";
image.style.height = "88px";
image.style.borderRadius = "50%";
image.style.marginBottom = "2px";
image.style.marginTop = "0"`



const fulname = document.createElement("h2");
container.appendChild(fulname);
fulname.innerText = "Jessica Randall";
fulname.style.cssText = `marginBottom = "-15px";
fulname.style.fontSize = "33px"
fulname.style.lineHeight = "150%"
fulname.style.fontWeight = "600"`



const user = document.createElement("p");
container.appendChild(user)
user.innerText = "London, United Kingdom";
user.style.cssText = `color = " #C4F82A";
user.style.marginBottom = "28px";
user.style.fontWeight = "700"
user.style.fontSize = "20px"`



const bio = document.createElement("p");
container.appendChild(bio);
bio.innerText = `"Front-end developer and avid reader."`;
bio.style.cssText = `fontSize = "20px";
bio.style.marginBottom = "24px";`


const button1 = document.createElement("button");
button1.innerText = "github";
container.append(button1);
button1.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
color: #FFFFFF;
font-size: 16px;
`

const button2 = document.createElement("button");
button2.innerText = "Frontend Mentor";
container.append(button2);
button2.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
color: #FFFFFF;
font-size: 16px;
`
const button3 = document.createElement("button");
button3.innerText = "LinkedIn";
container.append(button3);
button3.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
color: #FFFFFF;
font-size: 16px;
`
const button4 = document.createElement("button");
button4.innerText = "twitter";
container.append(button4);
button4.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
color: #FFFFFF;
font-size: 16px;
`
const button5 = document.createElement("button");
button5.innerText = "instagram";
container.append(button5);
button5.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
color: #FFFFFF;
font-size: 16px;
`