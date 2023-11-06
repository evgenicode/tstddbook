const parse = (char: string) => {
  switch (char) {
    case "d":
      return { status: "Dev", effort: 0.5 };
    case "D":
      return { status: "Dev", effort: 1 };
    case "q":
      return { status: "QA", effort: 0.5 };
  }
};

export const translate = (input: string) => {
  const state: { [key: string]: number } = {
    Dev: 0,
    QA: 0,
  };
  input.split("").forEach((char: string) => {
    const { status, effort } = parse(char)!;
    state[status] = state[status] + effort;
  });
  return state;
};
