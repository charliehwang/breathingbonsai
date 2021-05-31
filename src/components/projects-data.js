export const PROJECTS_ORDERED = [
  "holmes",
  "breadth",
  "chart-scans-v1",
  "chart-scans-v2",
  "fundamental-charts-news",
  "top-stocks-by-day",
  "daytrader-dashboard",
  "daytrader-review",
  "jiffy-time-tracking",
  "slidetimer",
];

export const PROJECTS_DATA = {
  holmes: {
    name: "Portfolio Watcher",
    description:
      "Created to help in keeping track of a portfolio risk such as: portfolio heat, individual trade size vs account, percentage gain/loss, and whether stops are set. It can also handle multiple accounts.",
    technologiesUsed: "Express, WebSockets, Node.js, HTML/CSS/JS",
    slideWidth: 100,
    slideHeight: 50,
  },
  breadth: {
    name: "Market Breadth",
    description:
      "Captures the day's market conditions through breadth data compiled from various sources. D3 was used to display the data visually in chart and data form with colors highlighting trends.",
    technologiesUsed: "Express, Node.js, D3, jQuery, HTML/CSS/JS",
  },
  "chart-scans-v1": {
    name: "Chart Scans v1",
    description:
      "Gathered tickers from scans and displayed charts with bookmarking abilities.",
    technologiesUsed: "Express, Node.js, WScript, HTML/CSS/JS",
  },
  "chart-scans-v2": {
    name: "Chart Scans v2",
    description:
      "Displaying charts from scans and separated by sectors. Synching of charts across machines. Keyboard navigation. Dark mode setting.",
    technologiesUsed:
      "Express, Node.js, WebSockets, WScript, Puppeteer, HTML/CSS/JS",
  },
  "fundamental-charts-news": {
    name: "Fundamental for a Company",
    description:
      "Compiles fundamental data for a company and calculates EPS/Rev % increases. Also gathers data from news resources.",
    technologiesUsed: "Express, Node.js, MySQL, Puppeteer, HTML/CSS/JS",
  },
  "top-stocks-by-day": {
    name: "Top Stocks Each Day",
    description:
      "Lists out top tickers for each day. The tickers are sorted by top sectors and industries. Charts can also be displayed on the side.",
    technologiesUsed: "Express, Node.js, HTML/CSS/JS",
  },
  "daytrader-dashboard": {
    name: "Day Trader Dashboard",
    description:
      "Dashboard for daytrading to see what stocks currently have the most momentum. Keyboard navigation is used to send the tickers to Thinkorswim charts and a custom chart program to display charts at various times of the day.",
    technologiesUsed: "Express, WebSockets, HTML/CSS/JS",
  },
  "daytrader-review": {
    name: "Day Trader Review",
    description:
      "Helps a day trader review trades with rolling statistics and intraday charts for their specfic trades.",
    technologiesUsed: "Express, WebWorkers, WebSockets, HTML/CSS/JS",
  },
  "jiffy-time-tracking": {
    name: "Time Tracking Overview",
    description:
      "Visualizes the time spent during the week grouped by goals/projects/sub-projects.",
    technologiesUsed: "D3, HTML/CSS/JS",
  },
  slidetimer: {
    name: "Slidetimer",
    description:
      "An iOS Timer using a custom horizontal swiping UI to access more controls and simplifying the interface. At the time, horizontal UI interfaces were not common as they are today.",
    technologiesUsed: "Objective-C",
  },
};
