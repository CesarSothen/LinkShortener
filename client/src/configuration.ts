interface Configuration {
  server_uri: string;
}

export const configuration = (): Configuration => {
  const environment = process.env.NODE_ENV;
  const err = "Failed to load";
  let configuration: Configuration = {
    server_uri: err,
  };

  if (environment === "production") {
    configuration.server_uri = process.env.REACT_APP_SERVER_URI_PROD || err;
  } else {
    configuration.server_uri = process.env.REACT_APP_SERVER_URI_DEV || err;
  }

  return configuration;
};
