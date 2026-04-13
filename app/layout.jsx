export const metadata = {
  title: "Skynet Intelligence",
  description: "AI for Finance & Compliance"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: "#0a0a0a",
        color: "white",
        fontFamily: "Inter, sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
