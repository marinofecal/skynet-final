export async function POST(req) {
  try {
    const body = await req.json();
    const userPrompt = body.prompt;

    if (!userPrompt) {
      return Response.json({ result: 'ERROR: No prompt received' }, { status: 400 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 2048,
        temperature: 0.3,
        messages: [
          {
            role: 'system',
            content: 'You are a senior expert in finance, accounting, internal audit, IFRS standards, and Excel financial modeling. Provide precise, structured, actionable responses. Use clear sections and formatting. Be authoritative and professional.',
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      console.error('GROQ ERROR:', JSON.stringify(data));
      return Response.json({ result: 'ERROR: No response from AI engine. Check GROQ_API_KEY in Vercel environment variables.' });
    }

    return Response.json({ result: data.choices[0].message.content });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return Response.json({ result: 'ERROR: Server exception. Check Vercel function logs.' }, { status: 500 });
  }
}
