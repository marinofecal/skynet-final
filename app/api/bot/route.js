export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `You are a senior financial controller (Big4 level).

STRICT RULES:
- Use ONLY the data provided
- Do NOT invent any missing data
- If data is missing, explicitly say "Not available"
- Do NOT assume balance sheet values

OUTPUT STRUCTURE:

1. Executive Summary

2. Income Statement:
- Revenue
- Other Income
- Total Income
- Expenses
- Depreciation
- Interest
- Net Profit

3. Key Ratios (ONLY if possible):
- Profit Margin
- EBITDA (if possible)

4. Risk Analysis (based ONLY on numbers)

5. Recommendations (practical and specific)`
          },
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();

    return new Response(
      JSON.stringify({
        result: data.choices?.[0]?.message?.content || "No response"
      }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
