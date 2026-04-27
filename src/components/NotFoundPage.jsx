import { Link } from "react-router";


const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link to="/" style={styles.button}>
        Go Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    color: "#f9fafb",
    textAlign: "center",
  },
  code: {
    fontSize: "6rem",
    margin: 0,
    color: "#ef4444",
  },
  title: {
    fontSize: "2rem",
    margin: "10px 0",
  },
  text: {
    marginBottom: "20px",
    color: "#9ca3af",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ef4444",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default NotFoundPage;