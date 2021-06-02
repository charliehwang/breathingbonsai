export const PROJECTS_ORDERED = [
  "madminutes",
  "holmes",
  "breadth",
  "chart-scans-v1",
  "chart-scans-v2",
  "alp",
  "fundamental-charts-news",
  "top-stocks-by-day",
  "daytrader-dashboard",
  "daytrader-review",
  "jiffy-time-tracking",
  "slidetimer",
];

export const PROJECTS_DATA = {
  madminutes: {
    name: "Mad Minutes",
    description:
      "Helps kids with procedural math and alleviates daily checking and use of paper by teachers.",
    technologiesUsed: "HTML, CSS, JSS",
  },
  holmes: {
    name: "Portfolio Watcher",
    description:
      "Helps keep track of multiple acount portfolio risks such as: portfolio heat, individual trade size vs account, percentage gain/loss, and whether stops are set.",
    technologiesUsed: "Express, WebSockets, Node.js, HTML, CSS, JSS",
  },
  breadth: {
    name: "Market Breadth",
    description:
      "Captures the day's market conditions through breadth data compiled from various sources. D3 was used to display the data visually in chart and data form with colors highlighting trends.",
    technologiesUsed: "Express, Node.js, D3, jQuery, HTML, CSS, JSS",
  },
  "chart-scans-v1": {
    name: "Chart Scans v1",
    description:
      "Gathers tickers from scans and displays charts with bookmarking abilities.",
    technologiesUsed: "Express, Node.js, WScript, HTML, CSS, JSS",
  },
  "chart-scans-v2": {
    name: "Chart Scans v2",
    description:
      "Displays charts from scans separated by sectors. Syncs charts across machines. Has keyboard navigation and a dark mode setting.",
    technologiesUsed:
      "Express, Node.js, WebSockets, WScript, Puppeteer, HTML, CSS, JSS",
  },
  alp: {
    name: "Advanced Learning Plan",
    description:
      "The Advanced Learning Plan (ALP) web app helps the teacher with district required reporting for each GT student. For the screenshot, only the email, which was sent to parents is shown, due to the sensitivy of student data in the application portion.",
    technologiesUsed: "Apps Script, HTML, CSS, JSS",
  },
  "fundamental-charts-news": {
    name: "Fundamental Data for a Company",
    description:
      "Compiles fundamental data for a company and calculates EPS/Rev % increases. Also gathers data from news resources.",
    technologiesUsed: "Express, Node.js, MySQL, Puppeteer, HTML, CSS, JSS",
  },
  "top-stocks-by-day": {
    name: "Top Stocks Each Day",
    description:
      "Lists out top tickers for each day. The tickers are sorted by top sectors and industries. Charts can also be displayed on the side.",
    technologiesUsed: "Express, Node.js, HTML, CSS, JSS",
  },
  "daytrader-dashboard": {
    name: "Day Trader Dashboard",
    description:
      "Dashboard for daytrading to see what stocks currently have the most momentum. Keyboard navigation is used to send the tickers to Thinkorswim charts and a custom chart program to display charts at various times of the day.",
    technologiesUsed: "Express, WebSockets, HTML, CSS, JSS",
  },
  "daytrader-review": {
    name: "Day Trader Review",
    description:
      "Helps a day trader review trades with rolling statistics and intraday charts for their specfic trades.",
    technologiesUsed: "Express, WebWorkers, WebSockets, HTML, CSS, JSS",
  },
  "jiffy-time-tracking": {
    name: "Time Tracking Overview",
    description:
      "Visualizes the time spent during the week grouped by goals/projects/sub-projects.",
    technologiesUsed: "D3, HTML, CSS, JSS",
  },
  slidetimer: {
    name: "Slidetimer",
    description:
      "An iOS Timer using a custom horizontal swiping UI to access more controls and simplifying the interface. At the time, horizontal UI interfaces were not common as they are today.",
    technologiesUsed: "Objective-C",
  },
};
