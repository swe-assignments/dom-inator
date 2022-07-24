const config = {
  launch: {
    headless: !!process.env.CI
  }
}

if (!!process.env.CI) {
  config.server = {
    command: `npm run dev`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  }
}

module.exports = config