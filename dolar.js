// Función serverless de Vercel: consulta dolarapi.com del lado servidor y devuelve las 4 cotizaciones (venta).
module.exports = async (req, res) => {
  try {
    const r = await fetch('https://dolarapi.com/v1/dolares');
    if (!r.ok) throw new Error('dolarapi ' + r.status);
    const d = await r.json();
    const g = c => (d.find(x => x.casa === c) || {}).venta;
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json({ oficial: g('oficial'), blue: g('blue'), mep: g('bolsa'), tarjeta: g('tarjeta'), updated: new Date().toISOString(), source: 'dolarapi.com' });
  } catch (e) {
    res.status(502).json({ error: 'No se pudo consultar la cotización' });
  }
};
