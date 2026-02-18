import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ueeecuvnqyqsxjafbyzy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZWVjdXZucXlxc3hqYWZieXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNTMyMTcsImV4cCI6MjA4NjkyOTIxN30.2EuYujAMsDSZcndLNhz_lzakCqdxezXhfod6p6RWNUw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
