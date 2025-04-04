import Footer from "../components/footer"
import Header from "../components/header"
import Main from "../components/main"
const navLinks = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP"
];

const footerLinks = {
  dcComics: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"],
  dc: [
    "Terms Of Use",
    "Privacy policy (New)",
    "Ad Choices",
    "Advertising",
    "Jobs",
    "Subscriptions",
    "Talent Workshops",
    "CPSC Certificates",
    "Ratings",
    "Shop Help",
    "Contact Us"
  ],
  sites: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
  shop: ["Shop DC", "Shop DC Collectibles"]
};

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
