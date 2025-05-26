



document.body.style.backgroundColor = "#141414"
const container = document.createElement("div");
container.style.backgroundColor = "#1f1f1f";


const container2 = document.createElement("div");
document.body.append(container2);

container2.style.cssText = `
background-color: #1F1F1F;
width: 384px;
height: 611px;
display: flex;
flex-direction: column;
padding: 40px;
gap: 8px;
margin: 0 auto;
borderRadius = "12px";
`


const image = document.createElement("img");
document.body.append(image);
image.src = "./images/profile-pic.png";
container2.append(image);
image.style.cssText = `
width: 88px;
height: 88px;
borderRadius = "50%";
margin: 0 auto;
marginBottom = "2px";
`

const fulname = document.createElement("h1");
fulname.innerText = "Jessica Randall";
container2.append(fulname);
fulname.style.cssText = `
color: white;
font-size: 33px;
margin: 0 auto;
margin-top: 20px;
lineHeight = "150%"
fontWeight = "600"
`

const user = document.createElement("h2");
container2.append(user);
user.innerText = "London, United Kingdom";
user.style.cssText = `
color: #C4F82A;
margin: 0 auto;
margin-top: 4px;
marginBottom = "28px";
fontWeight = "700
font-size: 15px;
`

const job = document.createElement("p");
job.innerText = "Front - end developer and avid reader.";
container2.append(job);
job.style.cssText = `
font-size: 21px;
color: white;
margin: 0 auto;
margin-top: 8px;
`

const button1 = document.createElement("button");
button1.innerText = "github";
container2.append(button1);
button1.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 12px;
border: none;
color: white;
font-size: 16px;
`

const button2 = document.createElement("button");
button2.innerText = "Frontend Mentor";
container2.append(button2);
button2.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 12px;
border: none;
color: #FFFFFF;
font-size: 16px;
`
const button3 = document.createElement("button");
button3.innerText = "LinkedIn";
container2.append(button3);
button3.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 12px;
border: none;
color: #FFFFFF;
font-size: 16px;
`
const button4 = document.createElement("button");
button4.innerText = "twitter";
container2.append(button4);
button4.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 12px;
border: none;
color: #FFFFFF;
font-size: 16px;
`
const button5 = document.createElement("button");
button5.innerText = "instagram";
container2.append(button5);
button5.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 12px;
border: none;
color: #FFFFFF;
font-size: 16px;
`
