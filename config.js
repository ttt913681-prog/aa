// ใส่ค่าจาก Supabase > Project Settings > API
// anon key เปิดเผยในหน้าเว็บได้ เพราะ RLS จำกัดให้ลูกค้า "เพิ่มออเดอร์ได้อย่างเดียว"
// ห้ามใส่ service_role key หรือ Telegram Bot Token ในไฟล์นี้เด็ดขาด
const SUPABASE_URL = 'https://YOUR-PROJECT-ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY';
