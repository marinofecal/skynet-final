body: JSON.stringify({
  model: "mixtral-8x7b-32768",
  messages: [
    {
      role: "system",
      content: "You are an expert in finance, audit, and compliance. Generate structured professional reports.",
    },
    {
      role: "user",
      content: input,
    },
  ],
}),
