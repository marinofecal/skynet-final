export async function POST(req) {
  const body = await req.json();

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content: "You are a finance AI assistant that generates structured professional reports."
        },
        {
          role: "user",
          content: body.input
        }
      ]
    })
  });

  const data = await response.json();

  return Response.json({
    result: data.choices?.[0]?.message?.content || "No response"
  });
}
