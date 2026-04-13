import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { input } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
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
    });

    const data = await response.json();

    console.log("FULL GROQ RESPONSE:", JSON.stringify(data, null, 2));

    return NextResponse.json({
      result:
        data.choices?.[0]?.message?.content ||
        data.error?.message ||
        JSON.stringify(data),
    });

  } catch (error) {
    return NextResponse.json({
      result: "SERVER ERROR: " + error.message,
    });
  }
}
