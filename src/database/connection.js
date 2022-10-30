import sql from "mssql";
const DBconfig = {
  user: "sa",
  password: "12345",
  server: "localhost",
  database: "Qatar2022",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
export async function getConnection() {
  try {
    const pool = await sql.connect(DBconfig);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

export {sql}