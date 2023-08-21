import { Article } from "../TypeAliases/Article";

let listOfArticles: (Article)[] = [
    {id:1, title:"Communication", isPublished: true, publisher: "faisal"},
    {id:2, title:"Power", isPublished: false, publisher: "hassan"},
    {id:3, title:"Electronics", isPublished: true, publisher: "khaled"}
];

// listOfArticles.forEach(a => console.log(a))

let aFaisal: Article = listOfArticles[0];
let aHassan: Article = listOfArticles[1];
let aKhaled: Article = listOfArticles[2];

console.log(aFaisal);
console.log(aKhaled);