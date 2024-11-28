"use client"
import { useState, useCallback } from "react";

export function useRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendRequest = useCallback(async (callback) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await callback(); // Call the provided async function
      if (result.success) {
        setSuccess(result.message || "Operation successful.");
        return result;
      } else {
        throw new Error(result.message || "An unexpected error occurred.");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, success, sendRequest };
}
