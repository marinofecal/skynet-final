hGROQ_API_KEY  XAI_API_KEYexport async function POST(req) {
  try {
    const body = await req.json();
    const { prompt, systemPrompt } = body;

    if (!prompt) {
      return Response.json({ result: 'ERROR: No prompt received' }, { status: 400 });
    }

    const system = systemPrompt || `You are a senior financial expert providing formal business intelligence reports. 

CRITICAL FORMATTING RULES — always follow exactly:
- Start with a one-line executive summary
- Use numbered sections: 1. SECTION TITLE, 2. SECTION TITLE, etc.
- Under each section use bullet points starting with •
- Use sub-bullets with  - for details
- Bold key terms with **term**
- End with a CONCLUSION section with clear recommendations
- Be comprehensive, detailed, and professional — minimum 400 words
- Write as if this is a deliverable for a CFO or Board of Directors
- Never use casual language`;

    const response = await fetch('https://api.x.ai/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 4096,
        temperature: 0.2,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const data = await response.json();

    if (!data.choices?.[0]) {
      console.error('GROQ ERROR:', JSON.stringify(data));
      return Response.json({ result: 'ERROR: No response from AI engine. Verify GROQ_API_KEY in Vercel environment variables.' });
    }

    return Response.json({ result: data.choices[0].message.content });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return Response.json({ result: 'ERROR: Server exception. Check Vercel logs.' }, { status: 500 });
  }
}
