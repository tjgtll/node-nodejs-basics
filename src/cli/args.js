const parseArgs = () => {
  const prefix = "--";
  const results = [];

  for (const [index, arg] of process.argv.entries()) {
    if (arg.startsWith(prefix)) {
      const name = arg.substring(2);
      const value = process.argv[index + 1];
      const result = `${name} is ${value}`;

      results.push(result);
    }
  }

  console.log(results.join(", "));
};

parseArgs();
