const parseEnv = () => {
  const prefix = "RSS_";
  const results = [];

  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      const name = key.substring(prefix.length);
      const value = process.env[key];
      const result = `${prefix}${name}=${value}`;

      results.push(result);
    }
  }

  console.log(results.join("; "));
};

parseEnv();
