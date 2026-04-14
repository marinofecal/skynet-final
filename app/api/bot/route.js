export async function POST(req) {
  try {
    const body = await req.json();
    const userPrompt = body.prompt; // ✅ FIX CLAVE

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
            content: `
You are a senior audit expert.

Analyze the scenario and respond in this structured format:

1. RISKS
- Bullet points

2. CONTROLS
- Bullet points

3. AUDIT PROCEDURES
- Bullet points

Keep it concise and business-oriented.
`,
          },
          {
            role: "user",
            content: userPrompt, // ✅ AQUÍ USAS LA VARIABLE CORRECTA
          },
        ],
      }),
    });

    const data = await response.json();

    return Response.json({
      result: data.choices?.[0]?.message?.content || "No response",
    });

  } catch (error) {
    return Response.json({
      result: "Error processing request",
    });
  }
}
console.log("BODY:", body);
