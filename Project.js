//importing the prompt package to take input from the user
const prompt = require("prompt-sync")();

//It is the main array that will hold all the NFTS
let NFTs = [];

//function to print the total number of NFT's
function tellTheLength(arr) {
  return arr.length;
}

//function to return an object and put the requisite in it
function createObj(name, crew, haki, bounty) {
  let ob = {
    Name: name,
    Crew: crew,
    Haki: haki,
    Bounty: bounty,
  };

  return ob;
}

//a function to print all the NFTs details to the user
function printingPress() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\n" + `NFT Order #${i + 1}`);
    console.log("\nName : " + NFTs[i].Name);
    console.log("Crew : " + NFTs[i].Crew + " Pirates");
    console.log("Haki : " + NFTs[i].Haki);
    console.log("Bounty : " + NFTs[i].Bounty + " Bellies");
  }
}

//function to do the main task
function putinTheValues(n) {
  switch (n) {
    case "1":
      var a, b, c, d;
      console.log("\n");
      a = prompt("Enter the Name : ");
      b = prompt("Enter the Crew : ");
      c = prompt("Enter the Haki he/she can use : ");
      d = prompt("Enter the current Bounty : ");
      let obb = createObj(a, b, c, d);
      NFTs.push(obb);

      //Asking whether the user want to enter more and then proceeding as required
      console.log("\n");
      let Ask = prompt("You want to ENTER more ? : ");
      if (Ask == "yes" || Ask == "YES" || Ask == "Yes" || Ask == 1) {
        putinTheValues(n);
      }
      break;

    case "2":
      printingPress();
      break;

    case "3":
      let l = tellTheLength(NFTs);
      console.log("Total number of NFTs present : " + l);
      break;

    default:
      console.log("!! Invalid Input !!");
      return;
  }
}

//First Interface
function basicInterface() {
  console.log("\n\t\t-: NFT Centre :- \n");
  console.log("Choose the option you want to perform :-");
  console.log("Click 1 :. Enter new NFT Metadata :");
  console.log("Click 2 :. Print all the NFTs Details :");
  console.log("Click 3 :. Print the number of NFTs:");
  console.log("\n");

  let n = prompt("Enter your choice : ");

  putinTheValues(n);

  console.log("\n");
  let neXT = prompt("You want Anything else ? (Y / N) : ");

  if (neXT == "Y" || neXT == "y") {
    basicInterface();
  } else {
    return;
  }
}

//here we are making some NFTs Beforehand
let ob1 = createObj("Luffy", "Straw Hat's", "Advance 3", "3 Billion");
let ob2 = createObj("Shanks", "Red Haired", "Advance 3", "4.5 Billion");
NFTs.push(ob1, ob2);

//calling the function to begin the basic interface
basicInterface();

console.log("\n\t\tSEE YOU SOON");
