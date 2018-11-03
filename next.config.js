module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
    cookieSecret: process.env.COOKIE_SECRET,
    cloudinaryUrl: process.env.CLOUDINARY_URL,
    mongoUri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME,
    mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
    mailchimpListId: process.env.MAILCHIMP_LIST_ID
  },
  publicRuntimeConfig: { // Will be available on both server and client
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    gaTracker: process.env.GA_TRACKER,
    fbAppId: process.env.FB_APP_ID,
    mailchimpBaseUrl: process.env.MAILCHIMP_BASE_URL
  }
};
