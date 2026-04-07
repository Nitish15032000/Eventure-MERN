import connectDB from "./src/config/db.js";
import app from "./src/app.js";

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});