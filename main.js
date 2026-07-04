// main.js — прокси для Deno Deploy
Deno.serve((req) => {
  const url = new URL(req.url);
  const target = url.searchParams.get('url');
  if (!target) {
    return new Response('Missing url parameter', { status: 400 });
  }

  return fetch(target, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    },
  });
});
