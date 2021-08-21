// Stocks DUMMY DATA ?

const stocks = [
  {
    title: "HINDUNILVR",
    competency: 52,
    category: ["IT"]
  },
  {
    title: "BRITANNIA",
    competency: 48,
    category: ["Telecom"]
  },
  {
    title: "ASIANPAINT",
    competency: 32,
    category: ["Telecom"]
  },
  {
    title: "NESTLEIND",
    competency: 22,
    category: ["Pharma"]
  },
  {
    title: "BAJFINANCE",
    competency: 46,
    category: ["Pharma"]
  },

  {
    title: "HDFCBANK",
    competency: 31,
    category: ["IT"]
  },
  {
    title: "HDFC",
    competency: 29,
    category: ["IT"]
  },
  {
    title: "MARUTI",
    competency: 44,
    category: ["IT"]
  },
  {
    title: "EICHERMOT",
    competency: 32,
    category: ["IT"]
  },
  {
    title: "TATACONSUM",
    competency: 39,
    category: ["Energy"]
  },
  {
    title: "INFY",
    competency: 80,
    category: ["Telecom"]
  },
  {
    title: "TCS",
    competency: 2,
    category: ["Telecom"]
  },
  {
    title: "ITC",
    competency: 21,
    category: ["Energy"]
  },
  {
    title: "SHREECEM",
    competency: 35,
    category: ["Pharma"]
  },
  {
    title: "BAJAJFINSV",
    competency: 28,
    category: ["Pharma"]
  },
  {
    title: "TITAN",
    competency: 77,
    category: ["Pharma"]
  },

  {
    title: "HDFCLIFE",
    competency: 66,
    category: ["Energy"]
  },
  {
    title: "ICICIBANK",
    competency: 36,
    category: ["Energy"]
  },
  {
    title: "Jupyter",
    competency: 34,
    category: ["Energy"]
  },
  {
    title: "INDUSINDBK",
    competency: 22,
    category: ["Telecom"]
  }
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b"
];

const categories = [
  ...new Set(stocks.reduce((acc, { category }) => acc.concat(category), []))
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index]
  }));

export { categories, stocks };
