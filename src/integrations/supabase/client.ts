// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qiifxqwxatsqjrvgghiq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpaWZ4cXd4YXRzcWpydmdnaGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMjY5MDksImV4cCI6MjA1MjkwMjkwOX0.qre1GHzYWEQrqtqjTdMXaPIHgN-uLFOfF-sr9nSsCmQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);