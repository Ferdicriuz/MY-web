export default async function handler(req, res) {
  if (req.method === "POST") {
    const order = req.body;

    if (!order || !order.items || order.items.length === 0) {
      return res.status(400).json({ message: "Invalid order" });
    }

    console.log("✅ Order received:", order);

    // You can add DB logic here later
    return res.status(200).json({ message: "Order received successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
