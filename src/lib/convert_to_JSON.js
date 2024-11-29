export function deepClone(data) {
    if (data === null || typeof data !== "object") {
      throw new Error("Input must be an object or an array.");
    }
    try {
      return JSON.parse(JSON.stringify(data));
    } catch (error) {
      console.error("Failed to clone data:", error);
      throw error;
    }
  }