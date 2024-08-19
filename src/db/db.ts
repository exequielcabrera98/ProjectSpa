import sql from 'mssql';

const config = {
    user: 'tu_usuario',              // Reemplaza con tu usuario de SQL Server
    password: 'tu_contraseña',        // Reemplaza con tu contraseña
    server: 'localhost',        // Puede ser una IP o el nombre del servidor
    database: 'Spa',    // Reemplaza con el nombre de tu base de datos
    options: {
        encrypt: true,               // Usar SSL si es necesario
        trustServerCertificate: true // Solo para desarrollo local
    }
};

export const connectDB = async () => {
    try {
        const pool = await sql.connect(config);
        console.log('Conectado a SQL Server');
        return pool;
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        throw err;
    }
};

