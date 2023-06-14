
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <head>
      <title>Detail &mdash; Epictetus</title>
    </head>
    {children}
    </>
    
  )
}
