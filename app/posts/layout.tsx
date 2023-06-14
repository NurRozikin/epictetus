
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <head>
      <title>Posts &mdash; Epictetus</title>
    </head>
    {children}
    </>
    
  )
}
