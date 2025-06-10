import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      // In a real implementation, you would have an actual CV file
      // For now, we'll create a simple response that indicates the CV would be downloaded
      const cvPath = path.join(process.cwd(), "public", "Your_Name_CV.pdf");
      
      // Check if CV file exists, if not return a placeholder response
      if (fs.existsSync(cvPath)) {
        res.download(cvPath, "Your_Name_CV.pdf");
      } else {
        // Create a simple text response indicating where the CV file should be placed
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Your_Name_CV.pdf"');
        res.status(404).json({ 
          message: "CV file not found. Please place your CV file at /public/Your_Name_CV.pdf" 
        });
      }
    } catch (error) {
      console.error("Error downloading CV:", error);
      res.status(500).json({ message: "Error downloading CV" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
