export default function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manejar el inicio de sesión
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Iniciar Sesión</h2>
            <div>
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
}