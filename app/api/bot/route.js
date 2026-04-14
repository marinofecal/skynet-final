export async function POST(req) {
  const { prompt } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an IFRS expert specialized in IAS 36, IFRS 15 and IFRS 9. Provide structured, professional and concise answers suitable for finance teams.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const data = await response.json();

  return Response.json({
    result: data.choices?.[0]?.message?.content || "No response",
  });
}
