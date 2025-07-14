export default async function handler(req, res) {
  const { target } = req.query;

  if (!target) {
    return res.status(400).json({ error: 'Missing target URL' });
  }

  try {
    const response = await fetch(target, {
      method: req.method,
      headers: {
        ...req.headers,
        host: new URL(target).host,
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });

    const contentType = response.headers.get('content-type') || 'application/json';
    const body = await response.text();

    // ✅ 设置跨域允许
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    res.setHeader('Content-Type', contentType);
    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).json({ error: 'Proxy failed', detail: error.message });
  }
}
