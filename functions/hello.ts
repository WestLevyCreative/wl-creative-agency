// Example Vercel Edge Function
// Place this in the functions/ directory

export const config = {
  runtime: 'edge',
};

export default async (request: Request) => {
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'World';

    const response = {
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
      region: request.headers.get('x-vercel-id'),
    };

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
