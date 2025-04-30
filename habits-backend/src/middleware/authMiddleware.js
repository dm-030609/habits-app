// src/middleware/authMiddleware.js
import admin from "firebase-admin";
import { readFileSync } from "fs";
import { join } from "path";

// Cuidado: garanta que esse JSON NÃO fique público
const serviceAccount = JSON.parse(
  readFileSync(join(__dirname, "../firebase-service-account.json"), "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export async function verifyToken(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.split("Bearer ")[1] : null;
  if (!token) {
    return res.status(401).json({ error: "Não autorizado" });
  }
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // contém uid, email, etc.
    next();
  } catch (err) {
    console.error("Token inválido:", err);
    return res.status(401).json({ error: "Token inválido" });
  }
}
