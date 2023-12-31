module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  // ...
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "antixx-techhub",
        api_key: "867656517325614",
        api_secret: "2wk2P3OGcGdsUo-Q_4Y4voIVE-U",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});