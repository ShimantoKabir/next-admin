export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="auth-wrap">{children}</div>;
}
