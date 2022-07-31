interface Props {
    children: React.ReactNode;
}
export const LightLayout = ({children}:Props) => {
  return (
    <div
        style={{
            backgroundColor: '#fafafa',
            borderRadius: '5px',
            padding: '20px',
        }}
    >
        {children}
    </div>
  )
}

