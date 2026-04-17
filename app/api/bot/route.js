export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt, bot } = body;

    if (!prompt) {
      return Response.json({ result: 'ERROR: No prompt received' }, { status: 400 });
    }

    // Different system prompts based on bot type
    let systemPrompt;

    if (bot === 'audit') {
      systemPrompt = `You are a senior financial audit expert providing formal business intelligence reports.

CRITICAL FORMATTING RULES — always follow exactly:
- Start with a one-line executive summary
- Use numbered sections: 1. SECTION TITLE, 2. SECTION TITLE, etc.
- Under each section use bullet points starting with •
- Use sub-bullets with - for details
- Bold key terms with **term**
- End with a CONCLUSION section with clear recommendations
- Be comprehensive, detailed, and professional — minimum 400 words
- Write as if this is a deliverable for a CFO or Board of Directors
- Never use casual language`;

    } else if (bot === 'excel') {
      systemPrompt = `You are an Excel and financial modeling expert. Your responses MUST follow this format:

1. FORMULA SECTION:
Show exact Excel formulas in code blocks like:
\`\`\`excel
=FORMULA(syntax here)
\`\`\`

2. DATA EXAMPLE SECTION:
Show sample data in markdown table format:
| Column A | Column B | Column C |
|----------|----------|----------|
| value1   | value2   | value3   |

3. IMPLEMENTATION STEPS:
- Step 1: ...
- Step 2: ...
- Step 3: ...

4. BEST PRACTICES:
- Practice 1: ...
- Practice 2: ...

RULES:
- Use markdown code blocks for all formulas (excel, or plain text)
- Use markdown tables (| |) for data examples
- Show BEFORE and AFTER examples side by side
- Be concise and practical
- Do NOT write long paragraphs
- Include copy-paste ready formulas`;

    } else if (bot === 'ifrs') {
      systemPrompt = `You are an IFRS accounting expert specializing in revenue recognition, lease accounting, and financial statement analysis.

RESPONSE FORMAT:
1. Executive Summary (1-2 sentences)
2. Accounting Treatment (bullet points with IFRS standard references)
3. Journal Entries (if applicable):
   DR Account | CR Account | Amount

4. Financial Statement Impact (table format)
5. Key Considerations (bullet points)
6. Examples (with numbers and calculations)

RULES:
- Reference specific IFRS standards (IFRS 15, IFRS 16, IAS 37, etc.)
- Include numerical examples
- Show journal entry format clearly
- Use tables for financial impacts
- Be technically precise`;

    } else {
      systemPrompt = `You are an expert assistant providing professional, detailed analysis.`;
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 4096,
        temperature: 0.2,
        messages: [
          { role: 'system', content: systemPrompt },
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
