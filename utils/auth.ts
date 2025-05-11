// src/utils/auth.ts
import supabase from "~/utils/supabase"; // Correct default import

// Return types for the functions
interface AuthResult {
  data?: any;
  error?: string;
}

export const signUp = async (email: string, password: string): Promise<AuthResult> => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Error signing up:", error.message);
    return { error: error.message };
  }

  return { data };
};

export const logIn = async (email: string, password: string): Promise<AuthResult> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error logging in:", error.message);
    return { error: error.message };
  }

  return { data };
};

export const logOut = async (): Promise<AuthResult> => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error logging out:", error.message);
    return { error: error.message };
  }

  return { data: "Logged out successfully" };
};

export const getSession = async (): Promise<AuthResult> => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error.message);
    return { error: error.message };
  }

  return { data };
};
