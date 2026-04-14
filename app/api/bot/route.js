export async function POST(req) {
  try {
    const body = await req.json();
    const userPrompt = body.prompt;

    if (!userPrompt) {
      return Response.json({ result: "No prompt received" });
    }

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
            content: "You are an IFRS and accounting expert.",
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("OPENAI RAW:", data);

    if (!data.choices) {
      return Response.json({
        result: "Error: No response from AI",
      });
    }

    return Response.json({
      result: data.choices[0].message.content,
    });

  } catch (error) {
    console.error("ERROR:", error);

    return Response.json({
      result: "Server error",
    });
  }
}
